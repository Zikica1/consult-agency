async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

// const mm = gsap.matchMedia();

// mm.add('(max-width: 500px)', () => {
//   gsap.to('.blog-card-1', {
//     '--opacity': '1',
//     '--scale': 'scale(1)',
//     duration: 1,
//   });
// });

const mm2 = gsap.matchMedia();

mm2.add('(max-width:1080px)', () => {
  const blogCards = gsap.utils.toArray('.blog-card-anim');

  blogCards.forEach((card) => {
    gsap.to(card, {
      '--opacity': '1',
      '--y': 0,
      duration: 0.75,
      scrollTrigger: {
        trigger: card,
        start: '100px 60%',
        end: 'bottom 20%',
        markers: true,
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
