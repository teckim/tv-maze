import showsApi from '../api/shows.js';
import ShowCard from './showCard.js';

export default class ShowList {
  constructor() {
    this.fetchShows();
  }

  async fetchShows() {
    try {
      const shows = await showsApi.getByPage(1);

      this.shows = shows.slice(0, 21);
      this.shows.forEach((show) => {
        const showCard = new ShowCard(show);
      });
    } catch (e) {
      console.error(e);
    }
  }
}