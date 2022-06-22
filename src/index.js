import ShowList from './components/showList.js';
import Popup from './components/popup.js';
import renderpopup from './components/renderpopup.js';
import showsApi from './api/shows.js';
// Styles
import './assets/css/reset.css';
import './assets/css/layout.css';
import './assets/css/elements/link.css';
import './assets/css/elements/button.css';
import './assets/css/components/header.css';
import './assets/css/components/navbar.css';
import './assets/css/components/footer.css';
import './assets/css/components/show-list.css';
import './assets/css/components/show-card.css';

// Images
import './assets/images/logo.png';
 
const showList = new ShowList();
const showbtn = document.querySelectorAll('.btn');
showbtn.forEach(btn => {  
  btn.addEventListener('click', async (e) => {
  const shows = await showsApi.getByPage(1);
  let thisshows = shows.slice(0, 21);
       console.log(thisshows)
    renderpopup(thisshows, e.target.dataset.id);
  });
});