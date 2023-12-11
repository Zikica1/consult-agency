async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

const mm = gsap.matchMedia();

mm.add('(max-width: 500px)', () => {
  gsap.to('.blog-card-1', {
    '--opacity': '1',
    '--scale': 'scale(1)',
    duration: 1,
  });
});

const mm2 = gsap.matchMedia();

mm2.add('(max-width:1080px)', () => {
  const blogCards = gsap.utils.toArray('.blog-card-anim');

  blogCards.forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: -10,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: '100px 75%',
        end: 'bottom 50%',
        markers: false,
        scrub: false,
      },
    });
  });
});

const mm3 = gsap.matchMedia();

mm3.add('(min-width: 1081px)', () => {
  gsap.from('.blog-card-anim', {
    opacity: 0,
    duration: 1,
    stagger: 0.6,
  });
});
