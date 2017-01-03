var baseUrl = (process.env.BASE_URL || 'http://localhost:8080');
var url = baseUrl;
if (baseUrl !== 'http://localhost:8080') {
  url += '/protractor-cookbook';
}
exports.url = url;
