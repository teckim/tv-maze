import Http from '../utils/http.js';
import { API_URL } from '../constants.js';

const http = new Http(API_URL);

export default {
  getByPage(page) {
    return http.get(`shows?page=${page}`);
  },
};
