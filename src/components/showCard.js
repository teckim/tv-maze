const template = ({ image, name }) => `
    <div class="show-card__image">
      <img src="${image.medium}" alt="${name}"/>
    </div>
    <div class="show-card__header">
      <div class="show-card__title">${name}</div>
      <div class="show-card__likes">
        <button class="button button--plain button--primary">
          <span class="material-symbols-outlined button__icon">
            favorite
          </span>
          <span class="button__text">6 likes</span>
        </button>
      </div>
    </div>
    <div class="show-card__actions">
      <button class="show-card__comment-btn button button--primary">comment</button>
    </div>
  `;

export default class ShowCard {
  constructor(show) {
    this.show = show;

    this.render();
  }

  render() {
    const showListContainerEl = document.querySelector('.show-list');
    const showEl = document.createElement('div');
    const html = template(this.show);

    showEl.classList.add('show-card');
    showEl.innerHTML = html;
    showListContainerEl.appendChild(showEl);
  }
}