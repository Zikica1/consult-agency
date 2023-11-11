async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//our services
//our fact
const mm = gsap.matchMedia();

mm.add('(min-width: 1046px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.our-fact-content',
      start: 'top 50%',
      end: '+=100px 10%',
      markers: false,
      toggleActions: 'play revers play revers',
      scrub: 2,
    },
  });

  tl.to('.our-fact-img', {
    rotation: 360,
    duration: 3,
  }).to(
    '.our-fact-img-2',
    {
      y: -100,
      duration: 3,
    },
    '-=3'
  );

  gsap.to('.our-fact-img-yellow', {
    scrollTrigger: {
      trigger: '.our-stats',
      start: 'top 70%',
      end: 'bottom 20%',
      markers: false,
      scrub: 1.5,
    },
    y: -100,
    duration: 1.5,
  });

  gsap.from('.about-us-img-anim', {
    scrollTrigger: {
      trigger: '.about-us-img-anim',
      start: '70px 70%',
      end: '+=100 20%',
      markers: false,
      scrub: 2,
      toggleActions: 'play stop revers play',
    },
    x: 40,
    duration: 1.5,
  });
});

//our services title

gsap.from('.our-service-text', {
  opacity: 0,
  duration: 2,
});
gsap.from(
  '.our-service-title',
  {
    y: '-100%',
    duration: 1.8,
  },
  '-=1.8'
);

//our services card
const ourServicesCards = gsap.utils.toArray('.service-card-animation');

ourServicesCards.forEach((card) => {
  gsap.from(card, {
    scale: 1.2,
    opacity: 0,
    duration: 1.25,
    scrollTrigger: {
      trigger: card,
      start: 'top 60%',
      end: 'bottom 50%',
      markers: false,
      scrub: false,
      stager: 0.5,
    },
  });
});

//our-fact-counter

const items = gsap.utils.toArray('.our-stats-item');

items.forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: 50,
    duration: 1,
    onStart: countUp,
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      end: 'bottom 60%',
      markers: false,
      scrub: false,
    },
  });
});

gsap.from('.our-fact-title', {
  scrollTrigger: {
    trigger: '.our-fact-title',
    start: 'top 70%',
    end: 'bottom 60%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  duration: 1.5,
});

//counter
let counter = document.querySelectorAll('.counter');

function countUp() {
  counter.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      //count target
      const target = +counter.getAttribute('data-target');

      //current counter value
      const c = +counter.innerText;

      //increment
      const increment = target / 35;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 60);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

//about us
gsap.to('.about-us-content', {
  scrollTrigger: {
    trigger: '.about-us-content',
    start: '50px 80%',
    end: 'bottom 65%',
    markers: false,
    scrub: false,
  },
  '--clipPath': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-us-right-col-anim',
    start: '100px 75%',
    end: '+=50px 40%',
    markers: false,
    scrub: false,
  },
});

tl2
  .to('.about-us-right-col-anim', {
    '--scaleY': '0',
    stagger: 0.6,
    duration: 1.5,
  })
  .from('.about-us-btn-anim', {
    opacity: 0,
    duration: 1.25,
  });
