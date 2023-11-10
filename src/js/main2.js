export function render2() {
  let counter = document.querySelectorAll('.counter');

  //our skill
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.bar',
      start: 'top 90%',
      end: 'bottom 80%',
      markers: false,
      scrub: false,
    },
  });

  tl3.add(countUp).to('.line', {
    '--scale-x': '1',
  });

  //Counter
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
}
