async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//hero observer

const rightCon = document.querySelectorAll('.right-container');

const herObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('active', entry.isIntersecting);
      if (entry.isIntersecting) herObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: '0px 0px -150px 0px',
  }
);

rightCon.forEach((container) => {
  herObserver.observe(container);
});

//hero-background
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  '(min-width: 900px)': function () {
    gsap.to('.hero-background', {
      scrollTrigger: {
        trigger: '.hero-background',
        start: '70% 90%',
        end: 'bottom 70%',
        scrub: true,
        markers: false,
      },
      x: -200,
      duration: 1,
    });

    gsap.from('.grey-circle', {
      scrollTrigger: {
        trigger: '.grey-circle',
        start: 'top 80%',
        end: '50% 50%',
        scrub: true,
        markers: false,
      },
      x: 250,
      duration: 0.5,
    });
  },
});

//about element
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.element-col-left',
    start: 'top 75%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});

tl.from('.about-el-btn', {
  opacity: 0,
  y: -20,
  duration: 1,
  ease: 'back.out(1.7)',
})
  .from(
    '.element-col-text',
    {
      opacity: 0,
      y: -20,
      duration: 1,
    },
    '-=0.5'
  )
  .from(
    '.btn-gradient-2',
    {
      opacity: 0,
      y: -20,
      duration: 1,
    },
    '-=0.5'
  );

//about-element-desktop
ScrollTrigger.matchMedia({
  '(min-width: 900px)': function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.element-col-right',
        start: 'top 70%',
        end: '150px 45%',
        markers: false,
        scrub: 3,
        toggleActions: 'play reverse play reverse',
      },
    });
    tl.to('.element-about-1-ani', {
      y: -50,
      duration: 1,
    }).to(
      '.element-about-2-ani',
      {
        y: -25,
        duration: 0.75,
      },
      '-=0.5'
    );

    gsap.to('.element-about-5-ani', {
      scrollTrigger: {
        trigger: '.element-img-3',
        start: '50% 85%',
        end: 'bottom 50%',
        markers: false,
        scrub: 3,
        toggleActions: 'play reverse none none',
      },
      y: -50,
      duration: 0.75,
    });
  },
});

//service element
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.element-services-content',
    start: 'top 70%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});

tl2
  .from('.element-service-title', {
    opacity: 0,
    y: -20,
    duration: 1,
  })
  .from('.element-service-text', {
    opacity: 0,
    y: -20,
    duration: 1,
  });

//service-element-desktop-animation
ScrollTrigger.matchMedia({
  '(min-width: 900px)': function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.element-services-wrapper',
        start: 'top 70%',
        end: 'top 50%',
        markers: true,
        scrub: 4,
      },
    });

    tl.to('.element-srvices-card-1', {
      y: -50,
      duration: 0.5,
    }).to(
      '.element-srvices-card-3',
      {
        marginTop: 50,
        duration: 0.5,
      },
      '-=0.25'
    );
  },
});
//portfolio element
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.element-portfolio-text',
    start: 'top 50%',
    end: 'top 40%',
    markers: false,
    scrub: false,
  },
});

tl3
  .from('.element-portfolio-text', {
    opacity: 0,
    marginTop: -30,
    duration: 1,
  })
  .from(
    '.widget-img-circle',
    {
      y: 180,
      duration: 1.5,
    },
    '-=1'
  );

//choose us element
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.choose-us-left-col',
    start: 'top 70%',
    end: 'top 40%',
    markers: false,
    scrub: false,
  },
});

tl4
  .from('.btn-primary-ani', {
    y: -30,
    opacity: 0,
    duration: 1,
  })
  .from('.choose-us-text-ani', {
    y: -30,
    opacity: 0,
    duration: 1,
  });

gsap.from('.item-ani', {
  scrollTrigger: {
    trigger: '.choose-text-ani',
    start: '100% 50%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  stagger: 0.6,
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.choose-us-right-col',
    start: 'top 55%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});

tl5
  .from('.choose-us-widget-img', {
    opacity: 0,
    x: -150,
    duration: 1.5,
  })
  .from(
    '.choose-us-shape-ani-1',
    {
      opacity: 0,
      y: 110,
      duration: 1,
    },
    '-=0.6'
  )
  .from(
    '.choose-us-shape-ani-2',
    {
      opacity: 0,
      y: 50,
      duration: 1,
    },
    '-=0.6'
  )
  .from(
    '.choose-us-shape-ani-3',
    {
      opacity: 0,
      x: -110,
      duration: 1,
    },
    '-=0.6'
  );

//our pricing element
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.our-pricing-title',
    start: 'top 75%',
    end: 'bottom 50%',
    markers: false,
    scrub: false,
  },
});

tl6
  .from('.pricing-title-img', {
    opacity: 0,
    duration: 1,
  })
  .from(
    '.pricing-title-ani',
    {
      opacity: 0,
      duration: 1.5,
    },
    '-=0.5'
  );

const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.our-pricing-card-1',
    start: 'top 60%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});
tl7
  .from('.our-pricing-card-1', {
    opacity: 0,
    x: 100,
    duration: 1.4,
  })
  .from(
    '.card-price-1-ani',
    {
      opacity: 0,
      y: -50,
      duration: 1.4,
    },
    '-=1.2'
  );

const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.our-pricing-card-2',
    start: 'top 60%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});

tl8
  .from('.our-pricing-card-2', {
    opacity: 0,
    scale: 0.8,
    duration: 1.4,
  })
  .from(
    '.card-price-2-ani',
    {
      opacity: 0,
      y: -50,
      duration: 1.4,
    },
    '-=0.9'
  );

const tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: '.our-pricing-card-3',
    start: 'top 60%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});

tl9
  .from('.our-pricing-card-3', {
    opacity: 0,
    x: -100,
    duration: 1.4,
  })
  .from(
    '.card-price-3-ani',
    {
      opacity: 0,
      y: -50,
      duration: 1.4,
    },
    '-=1.2'
  );

//our-pricing-desktop
ScrollTrigger.matchMedia({
  '(min-width: 900px)': function () {
    gsap.to('.pricing-title-img', {
      scrollTrigger: {
        trigger: '.our-pricing-container',
        start: 'top 80%',
        end: '150px 35%',
        markers: false,
        scrub: 2,
      },
      rotate: '360deg',
      duration: 0.1,
    });
  },
});

//testimonial element
const tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: '.testimonial-title-ani',
    start: 'top 65%',
    end: 'bottom 55%',
    markers: false,
    scrub: false,
  },
});
tl10
  .from('.testimonial-title-ani', {
    opacity: 0,
    y: -50,
    duration: 1.4,
  })
  .from(
    '.testimonial-carousel-ani',
    {
      opacity: 0,
      scale: 0.8,
      duration: 1.4,
    },
    '-=0.4'
  )
  .from('.testimonial-btns-ani', {
    opacity: 0,
    y: -10,
    duration: 1,
  });

//Carousel

const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const arrowBtns = document.querySelectorAll('.portfolio-btn i');
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add('no-transition');
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove('no-transition');

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'left' ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(':hover')) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay);

//portfolio observer

const portfolioItems = document.querySelectorAll('.portfolio-item');

const portfolioObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
    if (entry.isIntersecting) portfolioObserver.unobserve(entry.target);
  });
});

portfolioItems.forEach((item) => {
  portfolioObserver.observe(item);
});

//Testimonial

const carouselTes = document.querySelector('.testimonial-carousel');
const buttonArrows = document.querySelectorAll('.testimonial-btns i');
const firstCard = document.querySelector('.testimonial-card').offsetWidth;
const carouselTesChildrens = [...carouselTes.children];

let isDraggingTes = false,
  startX2,
  startScrollLeft2;

let cardPerView2 = Math.round(carouselTes.offsetWidth / firstCard);

carouselTesChildrens
  .slice(-cardPerView2)
  .reverse()
  .forEach((card) => {
    carouselTes.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

carouselTesChildrens.slice(0, cardPerView2).forEach((card) => {
  carouselTes.insertAdjacentHTML('beforeend', card.outerHTML);
});

buttonArrows.forEach((btn) => {
  btn.addEventListener('click', () => {
    carouselTes.scrollLeft += btn.id == 'left' ? -firstCard : firstCard;
  });
});

const dragStart2 = (e) => {
  isDraggingTes = true;
  carouselTes.classList.add('dragging');
  startX2 = e.pageX;
  startScrollLeft2 = carouselTes.scrollLeft;
};

const dragging2 = (e) => {
  if (!isDraggingTes) return;
  carouselTes.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
};

const dragStop2 = (e) => {
  isDraggingTes = false;
  carouselTes.classList.remove('dragging');
};

const infiniteScroll2 = () => {
  if (carouselTes.scrollLeft === 0) {
    carouselTes.classList.add['no-transition'];
    carouselTes.scrollLeft =
      carouselTes.scrollWidth - 2 * carouselTes.offsetWidth;
    carouselTes.classList.remove['no-transition'];
  } else if (
    Math.ceil(carouselTes.scrollLeft) ===
    carouselTes.scrollWidth - carouselTes.offsetWidth
  ) {
    carouselTes.classList.add['no-transition'];
    carouselTes.scrollLeft = carouselTes.offsetWidth;
    carouselTes.classList.remove['no-transition'];
  }
};

carouselTes.addEventListener('mousedown', dragStart2);
carouselTes.addEventListener('mousemove', dragging2);
document.addEventListener('mouseup', dragStop2);
carouselTes.addEventListener('scroll', infiniteScroll2);
