let btn = document.getElementById("button");
let video = document.getElementById("video");
function click() {
  if (video.paused) {
    video.play();
    video.style.display = "unset";
    btn.classList.remove("bi-play-fill");
    btn.classList.add("bi-pause-fill");
  } else {
    video.pause();
    video.style.display = "none";
    btn.classList.remove("bi-pause-fill");
    btn.classList.add("bi-play-fill");
  }
}
btn.addEventListener("click", click);

const seats = document.querySelectorAll(".rowseat li");

seats.forEach(function (seat) {
  seat.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn event bubbling
    this.classList.toggle("selected");
  });
});
