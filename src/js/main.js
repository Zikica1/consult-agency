export function render() {
  //hamburger menu
  const menuHam = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-primary nav');
  const btnClose = document.querySelector('.close-btn');
  const itemList = document.querySelectorAll('.nav-body ul li');

  menuHam.addEventListener('click', () => {
    menuHam.classList.add('open');
    nav.classList.add('active');
  });

  btnClose.addEventListener('click', () => {
    nav.classList.remove('active');
    menuHam.classList.remove('open');
  });

  itemList.forEach((item) => {
    item.addEventListener('click', () => {
      menuHam.classList.remove('active');
    });
  });
}
