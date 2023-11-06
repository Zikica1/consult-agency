async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//our services
const mm = gsap.matchMedia();

mm.add('(min-width: 1046px)', () => {
  gsap.to('.service-half-circle-green', {
    scrollTrigger: {
      trigger: '.our-services-container',
      start: 'top 50%',
      end: '+=30px 40%',
      markers: false,
      scrub: 2,
    },
    x: -30,
    duration: 0.5,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.our-fact-content',
      start: 'top 50%',
      end: '+=50px 25%',
      markers: false,
      scrub: 2,
    },
  });

  tl.to('.our-fact-img', {
    rotate: '360deg',
    duration: 1.5,
  }).to(
    '.our-fact-img-2',
    {
      y: -100,
      duration: 1.5,
    },
    '-=1.5'
  );
});
