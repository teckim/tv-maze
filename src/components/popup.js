import showsApi from '../api/shows.js';
import renderpopup from './renderpopup.js';

class Popup {
    static fetchshow = async () => {
      const shows = await showsApi.getByPage(1);
     const fshows = shows.slice(0, 21);
      //console.log(fshows)
      return fshows;
    }
}
Popup.fetchshow()
export default Popup