import showsApi from '../api/shows.js';
import likesApi from '../api/likes.js';
import ShowCard from './showCard.js';
import renderpopup from './renderpopup.js';
import posts from '../api/posts.js';

export default class ShowList {
  constructor() {
    this.fetchShows();
  }

  async fetchShows() {
    try {
      const likes = await likesApi.getAll();
      const shows = await showsApi.getByPage(1);
      this.shows = shows.slice(0, 21);
      const showsCounterEl = document.querySelector('#shows-count');

      this.shows = shows
        .slice(0, 21)
        .map((show) => {
          const { likes: likesCount } = likes
            .find((like) => like.item_id === show.id) || { likes: 0 };

          return { ...show, likes: likesCount };
        });

      this.shows.forEach((show) => {
        const showCard = new ShowCard({ ...show, likes: 2 });
        showCard.onCommentClick = async () => {
          renderpopup(show);
          await posts.get(show.id).then((data) => {
            if (data.length === undefined) { data.length = 0; }
            const modal = document.querySelector('.commentarea');
            const comm = document.createElement('div');
            comm.innerHTML = `<h2 class="t">Comments(${data.length})</h2> `;
            modal.appendChild(comm);
            data.forEach((element) => {
              const modal = document.querySelector('.commentarea');
              const comm = document.createElement('div');
              comm.innerHTML = ` 
               <div class="t">${element.creation_date} ${element.username}: ${element.comment}</div>
               `;
              modal.appendChild(comm);
            });
          });
        };

        showCard.render();
      });

      showsCounterEl.innerHTML = this.shows.length;
    } catch (e) {
    }
  }
}