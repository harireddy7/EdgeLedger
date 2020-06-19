var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 17.513766, lng: 78.4462235 },
    zoom: 8
  });
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// adding opacity to navbar on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.getElementById('navbar').style.opacity = 0.8;
  } else {
    document.getElementById('navbar').style.opacity = 1;
  }
});
