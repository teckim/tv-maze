import likesApi from '../api/likes.js';

const template = ({
  id, image, name, likes,
}) => `
    <div class="show-card__image">
      <img src="${image.medium}" alt="${name}"/>
    </div>
    <div class="show-card__header">
      <div class="show-card__title">${name}</div>
      <div class="show-card__likes">
        <button data-id="${id}" class="button button--plain button--primary">
          <span class="material-symbols-outlined button__icon">
            favorite
          </span>
          <span class="button__text">${likes} likes</span>
        </button>
      </div>
    </div>
    <div class="show-card__actions">
      <button data-id="${id}" class="show-card__comment-btn button button--primary">comment</button>
    </div>
  `;

export default class ShowCard {
  constructor(show) {
    this.show = show;

    this.render();
  }

  mounted() {
    const likeBtnEl = document.querySelector(`.button[data-id="${this.show.id}"]`);

    this.likeBtnEl = likeBtnEl;
    this.likeBtnEl.addEventListener('click', () => this.onLikeClick());
  }

  onLikeClick() {
    const self = this;
    const { id } = this.show;

    likesApi.add(id)
      .then(() => {
        const likeBtnTxtEl = self.likeBtnEl.querySelector('.button__text');

        self.show.likes += 1;
        likeBtnTxtEl.innerHTML = `${self.show.likes} Likes`;
      })
      .catch((e) => console.log(e));
  }

  render() {
    const html = template(this.show);

    this.mount(html);
  }

  mount(html) {
    const showListContainerEl = document.querySelector('.show-list');
    const showEl = document.createElement('div');

    showEl.classList.add('show-card');
    showEl.innerHTML = html;

    showListContainerEl.appendChild(showEl);

    this.mounted();
  }
}