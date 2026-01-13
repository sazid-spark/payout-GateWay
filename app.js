const express = require('express');
const morgan = require('morgan');
const payoutRoutes = require('./routes/payout.routes.js');
const app = express();

app.use(express.json());
app.use(morgan('combined'));

// app.use((req, res, next) => {
//     console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
//     next();
// });

app.use('/api/payout', payoutRoutes);

app.set('trust proxy', true);

app.use((req, res, next) => {
    return res.status(404).json({
        success: false,
        message: req.message || "Not found",
        method: req.method,
        url: req.originalUrl
    });
});



module.exports = app;
