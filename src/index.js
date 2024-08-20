import './style.css';
import { home_page } from './home.js';
import { menu_page } from './menu.js';

const content = document.querySelector('#content');
content.append(home_page);

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    const page = btn.textContent.toLowerCase();
    switch (page) {
      case 'home':
        clearPage();
        toggleActiveBtn(btn);
        content.append(home_page);
        break;

      case 'menu':
        clearPage();
        toggleActiveBtn(btn);
        content.append(menu_page);
        break;

      default:
        break;
    }
  })
})

const clearPage = () => {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
}

const toggleActiveBtn = (btn) => {
  buttons.forEach(btn => {
    btn.classList.remove('active')
  });
  btn.classList.add('active');
}

