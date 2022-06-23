import posts from '../api/posts.js';

const renderpopup = (show) => {
  document.querySelector('main').style.filter = 'blur(1rem';
  const popupwindow = document.createElement('div');
  popupwindow.id = ('pop-up');
  popupwindow.classList.add('pop-up');
  const projectcode = `
        <div class="pop-container">
            <div class="img-cont">
                <div class="pop-image"><img src="${show.image.original}" alt="${show.name}"/></div>
                <div class="close"id="close">X</div>
            </div>
            <div class="pop-info">
                <h1 class="pop-name">${show.name}</h1>
                <div class="lang">Language ${show.language}</div>
                <div class="run-time">Runtime ${show.runtime} minutes</div> 
            </div>
            <h2 class"summary"> Summary</h2>
            <div class="pop-dsc">${show.summary}</div>
            <div class="commentarea"></div>
            <section class="pop-comments">
               <h1 class="comment-head">Add Comments</h2>
                 <form id ="form">
                 <input type="text" class="text" id="name" placeholder="Your name"/>
                 <input type="text" class="text" id="text" placeholder="Your insight"/>
                 <input type="submit" class="submit" value="Submit"/>
                 </form>
                </section>
        </div>`;
  popupwindow.innerHTML += projectcode;
  document.body.appendChild(popupwindow);
  document.getElementById('close').addEventListener('click', () => {
    document.querySelector('main').style.filter = 'none';
    popupwindow.innerHTML = '';
    document.body.removeChild(popupwindow);
  });
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { id } = show;
    const username = document.getElementById('name').value;
    const text = document.getElementById('text').value;
    posts.add(id, username, text).then(() => {
      form.reset();
    });
  });
};
export default renderpopup;