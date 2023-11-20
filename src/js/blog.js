async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

gsap.from('.blog-card-1', {
  opacity: 0,
  scale: 1.1,
  duration: 1,
});

const blogCards = gsap.utils.toArray('.blog-card-anim');

blogCards.forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: -10,
    scale: 1.05,
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
