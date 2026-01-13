// require('dotenv').config();
require('dotenv').config({ quiet: true });
const app = require('./app.js');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
