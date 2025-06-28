/*==================== MENU SHOW & HIDE ====================*/
const navElementsList = document.querySelector('.js-nav-elements-list'),
      navLinks = document.querySelectorAll('.js-nav-link'),
      menuIcon = document.querySelector('.js-menu-icon'),
      crossIcon = document.querySelector('.js-cross-icon');

// menu show
if(menuIcon) {
  menuIcon.addEventListener('click' ,() => {
    navElementsList.classList.add('show-menu');
  });
}

// menu hide
if(crossIcon) {
  crossIcon.addEventListener('click' ,() => {
    navElementsList.classList.remove('show-menu');
  });
}

// menu hide on clicking the links in the sidebar 
if(crossIcon) {
  navLinks.forEach(link => {
    link.addEventListener('click',() => {
      navElementsList.classList.remove('show-menu');
    });
  });
}

// menu hide on clicking outside the sidebar
document.addEventListener('pointerdown', (event) => {
  const clickedInsideNavbar = navElementsList.contains(event.target);
  const clickedMenuIcon = menuIcon.contains(event.target);
  const menuOpen = navElementsList.classList.contains('show-menu');

  if (!clickedInsideNavbar && !clickedMenuIcon && menuOpen ) {
    navElementsList.classList.remove('show-menu');
  }
});


/*==================== THEME TOGGLE ====================*/
const root = document.documentElement,
      themeToggle = document.querySelector('.js-theme-toggle'),
      themeToggleIcon = document.querySelector('.js-theme-toggle-icon');

themeToggle.addEventListener('click', () => {

  let currentTheme = root.getAttribute('data-theme');

  if (currentTheme === 'Dark') {

    root.setAttribute('data-theme', 'Light');
    themeToggleIcon.classList.add('animated');
    themeToggleIcon.classList.remove('uil-moon');
    themeToggleIcon.classList.add('uil-sun');

  } else if (currentTheme === 'Light') {

    root.setAttribute('data-theme', 'Dark');
    themeToggleIcon.classList.add('animated');
    themeToggleIcon.classList.remove('uil-sun');
    themeToggleIcon.classList.add('uil-moon');
    
  }

  setTimeout(()=> {
    themeToggleIcon.classList.remove('animated');
  }, 500)
});