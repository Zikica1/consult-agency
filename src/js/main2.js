export function render2() {
  let counter = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      countUp();
      observer.unobserve(entry.target);
    });
  });

  counter.forEach((item) => {
    observer.observe(item);
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
        const increment = target / 100;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 75);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }
}
