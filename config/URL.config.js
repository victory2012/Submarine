const env = process.env.pack_ENV === 'test';
let URL;
if (!env) {
  URL = '"/api"'; // 线上地址 待定
} else {
  URL = '"http://47.98.232.46:8586/api"';
}
module.exports = URL;
