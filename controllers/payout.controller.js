// controllers/payout.controller.js

const { initiatePayout } = require('../services/forward.service.js');

module.exports = {
  initiate: async (req, res) => {
    try {
      // console.log("Headers:", req.headers);
      // console.log("Body:", req.body);
      // console.log("IP:", req.ip);r
      // console.log("Original URL:", req.oiginalUrl);
      const response = await initiatePayout(req, req.body);
      return res.json(response);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Gateway failure" });
    }
  }
}

