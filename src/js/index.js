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
