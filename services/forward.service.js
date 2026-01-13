const axios = require("axios");
const { getClientIP } = require("../utils/ip.helper");


module.exports = {
  initiatePayout: async (req, payload) => {
    try {
      const getClientIp = await getClientIP(req);
      // Validation
      const {
        AccountNo,
        AmountR,
        APIRequestID,
        BankID,
        BeneMobile,
        BeneName,
        IFSC,
        bankName,
        remark,
        SenderEmail,
        SenderMobile,
        SenderName,
        WebHook,
        extraParam1,
        extraParam2,
        extraField1,
        sub_service_name
      } = payload;
      const RequestData = {
        AccountNo,
        AmountR,
        APIRequestID,
        BankID,
        BeneMobile,
        BeneName,
        IFSC,
        bankName,
        remark,
        SenderEmail,
        SenderMobile,
        SenderName,
        WebHook,
        extraParam1,
        extraParam2,
        extraField1,
        sub_service_name
      };
      const url = new URL(`https://192h5f2w-8080.inc1.devtunnels.ms/api/auth/sendOtpforMerchant`);
      const options = {
        method: "POST",
        url: url.href,
        headers: {
          "Content-Type": "application/json",
          "X-Gateway-Token": process.env.GATEWAY_SECRET,
          "authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiTWVyY2hhbnQiLCJpYXQiOjE3NjgyODMzMjksImV4cCI6MTc2ODM2OTcyOSwiYXVkIjoiNjg4MWVmZmQwMDNhZTI3MzFmNTU4YmE2IiwiaXNzIjoicGF5ZmxpeG8uaW4ifQ.601gcUYh6i7rnK_ioQu3UlVxX0Ga3oSyUmh_GM6W9NM",
          "X-Client-IP": getClientIp,   // 👈 now using extracted IP
        },
        data: RequestData,
        timeout: 30000
      };
      console.log("options", options);
      const response = await axios(options);
      return response.data;
    } catch (error) {
      // console.error("Forward payout error:", error?.response?.data || error.message);
      return {
        success: false,
        message: "Forward payout failed",
        error: error?.response?.data || error.message
      };
    }
  }
};
