async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

const contactsUsItems = gsap.utils.toArray('.contact-us-content-anim');

contactsUsItems.forEach((item) => {
  gsap.from(item, {
    y: -300,
    duration: 1.5,
  });
});

gsap.from('.contact-us-form', {
  y: 150,
  opacity: 0,
  duration: 1.25,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.contact-us-form',
    start: 'top 86%',
    end: 'top 50%',
    markers: false,
    scrub: false,
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact-halfcircle-blu-img',
    start: 'top 70%',
    end: 'bottom 50%',
    markers: false,
    scrub: false,
  },
});

tl.from('.contact-blue-img-anim', {
  x: 50,
  duration: 1,
}).from('.contact-us-map-anim', {
  opacity: 0,
  duration: 1.5,
});

gsap.from('.contact-us-info', {
  y: 50,
  opacity: 0,
  duration: 1.25,
  scrollTrigger: {
    trigger: '.contact-us-info',
    start: 'top 85%',
    end: '+=150 40%',
    markers: false,
    scrub: false,
  },
});

const mm = gsap.matchMedia();

mm.add('(min-width: 1046px)', () => {
  gsap.to('.contact-us-img-anim', {
    scrollTrigger: {
      trigger: '.contact-us-left-col',
      start: 'top 35%',
      end: '+=150px top',
      markers: false,
      scrub: 2,
    },
    y: -80,
    duration: 1,
  });

  gsap.to('.contact-rectangle-img-anim', {
    y: 60,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.contact-us-info',
      start: '50px 70%',
      end: 'top 20%',
      markers: false,
      scrub: 1,
    },
  });
});
