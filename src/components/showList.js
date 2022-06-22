import showsApi from '../api/shows.js';
import ShowCard from './showCard.js';
import renderpopup from './renderpopup.js';

export default class ShowList {
  constructor() {
    this.fetchShows();
  }

  async fetchShows() {
    try {
      const shows = await showsApi.getByPage(1);
      const showsCounterEl = document.querySelector('#shows-count');

      this.shows = shows.slice(0, 21);
      this.shows.forEach((show) => {
        const showCard = new ShowCard({ ...show, likes: 2 });
        showCard.onCommentClick = () => {
          renderpopup(show);
        };

        showCard.render();
      });

      showsCounterEl.innerHTML = this.shows.length;
    } catch (e) {
    }
  }
}