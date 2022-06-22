import Http from '../utils/http.js';
import { API_INVOLVE_URL, APP_ID } from '../constants.js';

const http = new Http(API_INVOLVE_URL);
const endPoint = `apps/${APP_ID}/comments`;

export default {
  get(index) {
    const endPoint2 = `apps/${APP_ID}/comments?item_id=${index}`;
    return http.get(endPoint2);
  },

  add(itemId, name, text) {
    const data = {
      item_id: itemId,
      username: name,
      comment: text,
    };

    return http.post(endPoint, data);
  },
};
