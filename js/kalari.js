setTimeout(function () {
  $('.loader-wrapper').fadeToggle();
}, 1500);

AOS.init();

VANTA.WAVES({
  el: '#dynamicHeroKalari',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x9f7f52,
  shininess: 28.0,
  waveHeight: 13.0,
  waveSpeed: 0.65,
  zoom: 0.78,
});

// window.onscroll = function () {
//   // We add pageYOffset for compatibility with IE.
//   if (window.scrollY >= 200 || window.pageYOffset >= 200) {
//     document.querySelector('.scrollup').style.visibility = 'visible';
//   } else {
//     document.querySelector('.scrollup').style.visibility = 'hidden';
//   }
// };
