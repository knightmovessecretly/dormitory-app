const API_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api/'
    : 'http://173.208.142.58:10081/api/';

const BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'http://173.208.142.58:10081';

export default {
  API_URL,
  BASE_URL,
};