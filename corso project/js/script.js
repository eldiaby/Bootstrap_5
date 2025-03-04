// Nav bar animatins
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-dark', 'navbar-sticky');
  } else {
    navbar.classList.remove('bg-dark', 'navbar-sticky');
  }
});
