// Responsive Navbar Collapse
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar ul');
const navbarLinks = document.querySelectorAll('.navbar ul li a');

navbarToggler.addEventListener('click', navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
}

navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener('click', navbarLinkClick);
});

function navbarLinkClick() {
  if (navbarMenu.classList.contains('open')) {
    navbarToggler.click();
  }
}
