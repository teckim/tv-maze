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
                <h1 class="name">${show.name}</h1>
                <div class="lang">Language ${show.language}</div>
                <div class="run-time">Runtime ${show.runtime} minutes</div> 
            </div>
            <h2 class"summary"> Summary</h2>
            <div class="pop-dsc">${show.summary}</div>
        </div>`;
  popupwindow.innerHTML += projectcode;
  document.body.appendChild(popupwindow);
  document.getElementById('close').addEventListener('click', () => {
    document.querySelector('main').style.filter = 'none';
    popupwindow.innerHTML = '';
    document.body.removeChild(popupwindow);
  });
};
export default renderpopup;