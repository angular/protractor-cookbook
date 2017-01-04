export let baseUrl = (process.env.BASE_URL || 'http://localhost:8080');
export let url = baseUrl;

url = baseUrl;
if (url !== 'http://localhost:8080') {
  url += '/protractor-cookbook';
}
