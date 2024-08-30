document.querySelectorAll(".t-card").forEach((card) => {
  const video = card.querySelector(".bg-video");

  card.addEventListener("mouseenter", () => {
    video.play();
    card.classList.add("rotate"); // Add rotation class on hover
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reset video to start
    card.classList.remove("rotate"); // Remove rotation class when not hovered
  });
});
