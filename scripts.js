let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (dot controls)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let videos = document.querySelectorAll("video");

  if (n > slides.length) { slideIndex = 1; } // Loop back to first slide
  if (n < 1) { slideIndex = slides.length; } // Go to the last slide if previous is clicked on the first slide

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
    videos[i].pause(); // Pause all videos
  }

  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  videos[slideIndex - 1].play(); // Play the current video
}

// Auto-slide every 10 seconds
setInterval(function() {
  plusSlides(1); // Move to the next slide every 10 seconds
}, 10000);




