var baseUrl = (process.env.BASE_URL || 'http://localhost:8080');
var url = baseUrl;
if (baseUrl !== 'http://localhost:8080') {
  url += '/protractor-cookbook';
} else {
  url = "http://10.0.2.2:8080"; // cannot access the demo app inside mobile browser using "http://localhost". refer https://developer.android.com/studio/run/emulator-networking.
}
exports.url = url;
