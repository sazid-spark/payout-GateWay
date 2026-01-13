const requests = new Map();

// function getClientIP(req) {
//   const ip =
//     req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
//     req.connection?.remoteAddress ||
//     req.socket?.remoteAddress ||
//     req.ip;

//   return ip.replace('::ffff:', '');
// }

module.exports = function rateLimit(req, res, next) {
  // const ip = getClientIP(req);
  const now = Date.now();
  const { ip } = req;
  const record = requests.get(ip) || { count: 0, time: now };

  if (now - record.time > 60000) {
    record.count = 0;
    record.time = now;
  }

  record.count++;
  // console.log("Client IP:", ip, "Record:", record);
  if (record.count > 5) {
    return res.status(429).json({ error: "Too many requests" });
  }
  requests.set(ip, record);
  next();
};

// module.exports = function getClientIP(req) {
//   let ip =
//     req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
//     req.headers["x-real-ip"] ||
//     req.socket?.remoteAddress ||
//     req.connection?.remoteAddress ||
//     req.ip ||
//     "unknown";

//   // Remove IPv6 prefix if present (e.g., ::ffff:192.168.1.1)
//   if (ip.startsWith("::ffff:")) {
//     ip = ip.replace("::ffff:", "");
//   }

//   return ip;
// };



