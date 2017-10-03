const hotspotTitle = $("#mainTitle");
const hotspotButton = $("#servicesButton");

$('*').click((event) => {
  if (event.target !== hotspotTitle && event.target !== hotspotButton) {
    $(".hotspot").toggleClass("disabled fade-element");
  }
});
