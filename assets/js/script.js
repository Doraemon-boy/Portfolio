/*==================== MENU SHOW & HIDE ====================*/
const navElementsList = document.querySelector('.js-nav-elements-list'),
      menuIcon = document.querySelector('.js-menu-icon'),
      crossIcon = document.querySelector('.js-cross-icon');

// menu show
if(menuIcon) {
  menuIcon.addEventListener('click' ,() => {
    navElementsList.classList.add('show-menu');
  });
}

// menu hidden
if(crossIcon) {
  crossIcon.addEventListener('click' ,() => {
    navElementsList.classList.remove('show-menu');
  });
}