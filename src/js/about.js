async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//welcome
gsap.to('.welcome-anim-1', {
  scrollTrigger: {
    trigger: '.welcome-title',
    start: 'top 50%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
  },
  '--y': '100%',
  duration: 2,
  delay: 1,
  stagger: 0.8,
});

gsap.to('.welcome-signature', {
  scrollTrigger: {
    trigger: '.welcome-signature',
    start: 'top 90%',
    end: 'top 80%',
    markers: false,
    scrub: false,
  },
  clipPath: 'inset(0 0 0 0)',
  duration: 1,
});

gsap.to('.welcome-img-anim', {
  scrollTrigger: {
    trigger: '.welcome-img-anim',
    start: 'top 65%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
  },
  '--opacity': '1',
  '--x': 0,
  duration: 1,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.welcome-rectangle-img',
    start: 'top 70%',
    end: 'bottom 50%',
    markers: false,
    scrub: false,
  },
});

tl.to('.about-rectangle-yellow-anim', {
  '--scaleY2': 'scaleY(1)',
  duration: 1,
})
  .to(
    '.about-rectangle-green-anim',
    {
      '--opacity3': 'opacity(1)',
      '--y3': 'translateY(0)',
      duration: 1,
    },
    '-=0.60'
  )
  .to(
    '.about-half-circle-blue-anim',
    {
      '--opacity3': '1',
      '--y2': 'translate(0)',
    },
    '-=0.8'
  )
  .to(
    '.welcome-circle-img-anim',
    {
      '--opacity2': '1',
      '--marginL': '0',
      duration: 0.5,
    },
    '-=0.9'
  );

const mm = gsap.matchMedia();

mm.add('(min-width:1046px)', () => {
  gsap.from('.welcome-phone-img-anim', {
    scrollTrigger: {
      trigger: '.welcome-rectangle-img',
      start: '50px 90%',
      end: 'bottom 50%',
      markers: false,
      scrub: 3,
      // toggleAction: 'play stop play reverse',
    },
    y: -100,
  });
});

//welcome brochure
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.welcome-brochure-content',
    start: 'top 50%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
  },
});
tl2
  .from('.welcome-brochure-content', {
    opacity: 0,
    y: -100,
    duration: 1,
  })
  .from('.welcome-btn-anim', {
    opacity: 0,
    duration: 1,
  });

//our team
gsap.from('.our-team-title', {
  scrollTrigger: {
    trigger: '.our-team-title',
    start: 'top 70%',
    end: 'bottom 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  duration: 1,
});

gsap.from('.our-team-card-1', {
  scrollTrigger: {
    trigger: '.our-team-card-1',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

gsap.from('.our-team-card-2', {
  scrollTrigger: {
    trigger: '.our-team-card-2',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

gsap.from('.our-team-card-3', {
  scrollTrigger: {
    trigger: '.our-team-card-3',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: 100,
  duration: 1,
});

gsap.from('.our-team-card-4', {
  scrollTrigger: {
    trigger: '.our-team-card-4',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: 100,
  duration: 1,
});

gsap.from('.our-team-card-5', {
  scrollTrigger: {
    trigger: '.our-team-card-5',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

gsap.from('.our-team-card-6', {
  scrollTrigger: {
    trigger: '.our-team-card-6',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

gsap.from('.our-team-card-7', {
  scrollTrigger: {
    trigger: '.our-team-card-7',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: 100,
  duration: 1,
});

gsap.from('.our-team-card-8', {
  scrollTrigger: {
    trigger: '.our-team-card-8',
    start: 'top 70%',
    end: '150px 50%',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: 100,
  duration: 1,
});

//our skill
gsap.from('.our-skill-left-col', {
  scrollTrigger: {
    trigger: '.our-skill-left-col',
    start: 'top 60%',
    end: '+=150px',
    markers: false,
    scrub: false,
  },
  opacity: 0,
  duration: 1.5,
});

const mm2 = gsap.matchMedia();

mm2.add('(min-width: 1046px)', () => {
  gsap.to('.our-skill-img-anim', {
    scrollTrigger: {
      trigger: '.our-skill-wrapper',
      start: 'top 60%',
      end: 'bottom 25%',
      markers: false,
      scrub: 3,
    },
    y: -150,
  });
});

const bars = gsap.utils.toArray('.bar');

bars.forEach((bar) => {
  gsap.to(bar.querySelector('.line'), {
    '--scale-x': '1',
    scrollTrigger: {
      trigger: bar,
      start: 'bottom 85%',
      end: 'bottom top',
      markers: false,
      scrub: false,
      onEnter: () => {
        if (!bar.classList.contains('counted')) {
          countUp(bar);
          bar.classList.add('counted');
        }
      },
    },
  });
});

// counter
function countUp(bar) {
  const counter = bar.querySelector('.counter');
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 35;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
}
