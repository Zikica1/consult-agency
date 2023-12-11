async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

const projectCards = gsap.utils.toArray('.project-card');

const mm = gsap.matchMedia();
const mm2 = gsap.matchMedia();

mm.add('(max-width: 836px)', () => {
  projectCards.forEach((card) => {
    gsap.from(card, {
      scale: 1.05,
      opacity: 0,
      x: 80,
      duration: 1.5,
      delay: 0.35,
      scrollTrigger: {
        trigger: card,
        start: 'top 70%',
        end: '+=150px 40%',
        markers: false,
        scrub: false,
      },
    });
  });
});

mm2.add('(min-width: 837px)', () => {
  gsap.from('.project-card', {
    opacity: 0,
    duration: 1.5,
    stagger: 0.6,
  });
});
