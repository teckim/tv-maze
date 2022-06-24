import showList from './components/showList.js';
import header from './components/header.js';

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
import './assets/css/components/popup.css';
import './assets/css/components/comment.css';
import './assets/css/components/hero.css';

// Images
import './assets/images/logo.png';

showList.init();
showList.created = () => {
  showList.render();
};

header.init();