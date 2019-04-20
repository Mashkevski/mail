const mainHeader = document.querySelector('.main-header');
console.log(mainHeader);
const mainNavToggle = mainHeader.querySelector('.main-nav-toggle');

mainHeader.classList.remove('menu-nojs');

mainNavToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('menu-closed')) {
    mainHeader.classList.remove('menu-closed');
    mainHeader.classList.add('menu-opened');
  } else {
    mainHeader.classList.add('menu-closed');
    mainHeader.classList.remove('menu-opened');
  }
});
