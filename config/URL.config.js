const env = process.env.pack_ENV === 'test';
let URL;
if (!env) {
  URL = '"https://www.myriadiot.net/api"';
} else {
  URL = '"http://192.168.1.192/api"';
}
module.exports = URL;
