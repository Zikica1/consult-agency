async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

//blog-share
const shareBtn = document.querySelector('.blog-share');
const socials = document.querySelector('.blog-tags-socials');

function openShare() {
  socials.classList.toggle('show');
}

function closeShare(e) {
  if (!socials.contains(e.target) && !shareBtn.contains(e.target)) {
    socials.classList.remove('show');
  }
}

shareBtn.addEventListener('click', openShare);
window.addEventListener('click', closeShare);
