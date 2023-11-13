export function render2() {
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
}
