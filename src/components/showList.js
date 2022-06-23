import showsApi from '../api/shows.js';
import likesApi from '../api/likes.js';
import ShowCard from './showCard.js';
import renderpopup from './renderpopup.js';

export default {
  async init() {
    this.shows = await this.fetchShows();
    this.setCounterEl();

    if (typeof this.created === 'function') this.created();
  },

  async fetchShows() {
    let shows = [];

    try {
      const likes = await this.fetchLikes();

      shows = await showsApi.getByPage(1);
      shows = shows
        .slice(0, 21)
        .map((show) => {
          const { likes: likesCount } = likes
            .find((like) => like.item_id === show.id) || { likes: 0 };

          return { ...show, likes: likesCount };
        });
    } catch (err) {
      console.log(err);
    }

    return shows;
  },

  async fetchLikes() {
    let likes = [];

    try {
      likes = await likesApi.getAll();
    } catch (err) {
      console.log(err);
    }

    return likes;
  },

  render() {
    this.shows.forEach((show) => {
      const showCard = new ShowCard({ ...show, likes: 2 });
      showCard.onCommentClick = () => {
        renderpopup(show);
      };

      showCard.render();
    });
  },

  setCounterEl() {
    const showsCounterEl = document.querySelector('#shows-count');

    showsCounterEl.innerHTML = this.shows.length;
  },
};