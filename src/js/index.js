async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//hero observer

const rightCon = document.querySelectorAll('.right-container');

const herObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('active', entry.isIntersecting);
      if (entry.isIntersecting) herObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: '0px 0px -150px 0px',
  }
);

rightCon.forEach((container) => {
  herObserver.observe(container);
});
