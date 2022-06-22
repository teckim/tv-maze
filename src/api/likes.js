import Http from '../utils/http.js';
import { API_INVOLVE_URL, APP_ID } from '../constants.js';

const http = new Http(API_INVOLVE_URL);
const endPoint = `apps/${APP_ID}/likes`;

export default {
  get() {
    return http.get(endPoint);
  },

  add(itemId) {
    const data = { item_id: itemId };

    return http.post(endPoint, data);
  },
};
