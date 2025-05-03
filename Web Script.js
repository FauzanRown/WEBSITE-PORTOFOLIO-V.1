// untuk bagian humberger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navmenu.classList.toggle('hidden'); // jika ada kelas hidden hilangkan, klo ngk ada tambahkan
});
 