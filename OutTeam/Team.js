document.querySelectorAll(".t-card").forEach((card) => {
  const video = card.querySelector(".bg-video");

  card.addEventListener("mouseenter", () => {
    video.play();
    card.classList.add("rotate");
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    card.classList.remove("rotate");
  });
});
