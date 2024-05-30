window.addEventListener('resize', function () {
  var sidebar = document.getElementById("sidebar");
  if (window.innerWidth > 900) {
    sidebar.style.display = 'none';
  }
});

window.dispatchEvent(new Event('resize'));

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

$('#slider-wrapper').slick({
  prevArrow: '<div class="custom-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg></div>',
  nextArrow: '<div class="custom-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg></div>',
});