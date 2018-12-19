'use strict';
// import URL from "./URL.config";
const URL = require('./URL.config');
console.log(process.env.pack_ENV, '===>', URL);
module.exports = {
  NODE_ENV: '"production"',
  API_HOST: URL
};
