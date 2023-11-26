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

  //footer
  const tl11 = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer-widget',
      start: '100% 75%',
      end: 'bottom 60%',
      markers: false,
      scrub: false,
    },
  });

  tl11
    .to('.footer-widget-ani', {
      '--y': '0',
      duration: 1,
    })
    .fromTo(
      '.btn-gradient-3-ani',
      {
        opacity: 0,
        scaleY: 1.3,
        scaleX: 1.3,
      },
      {
        opacity: 1,
        scaleY: 1,
        scaleX: 1,
        duration: 0.25,
      }
    )
    .from(
      '.footer-widg-img-right',
      {
        rotate: '-90deg',
        y: -100,
        opacity: 0,
        duration: 1,
      },
      '-=0.5'
    );

  gsap.from('.footer-contact-ani', {
    scrollTrigger: {
      trigger: '.footer-contact-ani',
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: false,
      markers: false,
    },
    opacity: 0,
    duration: 1.2,
  });

  gsap.from('.footer-links-ani', {
    scrollTrigger: {
      trigger: '.footer-links-ani',
      start: 'top 50%',
      end: 'bottom 50%',
      markers: false,
      scrub: false,
    },
    opacity: 0,
    duration: 1,
    delay: 0.25,
  });

  gsap.from('.footer-hours-ani', {
    scrollTrigger: {
      trigger: '.footer-hours-ani',
      start: 'top 50%',
      end: 'bottom 50%',
      markers: false,
      scrub: false,
    },
    opacity: 0,
    duration: 1,
    delay: 0.25,
  });

  gsap.from('.footer-newsletter-ani', {
    scrollTrigger: {
      trigger: '.footer-newsletter-ani',
      start: '-20px 55%',
      end: 'bottom 40%',
      markers: false,
      scrub: false,
    },
    opacity: 0,
    duration: 1,
    delay: 1,
  });

  gsap.from('.footer-img-yellow-ani', {
    scrollTrigger: {
      trigger: '.footer-newsletter-ani',
      start: '-20px 55%',
      end: 'bottom 40%',
      markers: false,
      scrub: false,
    },
    opacity: 0,
    y: '100%',
    duration: 1,
  });
}

//scrollToTop-btn
const scrollTopButton = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', () => {
  scrollTopButton.classList.toggle('active', window.scrollY > 50);
});

scrollTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
