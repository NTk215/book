let btn = document.getElementById("button");
let video = document.getElementById("video");
let next = document.getElementById("next");
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
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

next.addEventListener("click", function () {
  // ấn vào nút next sẽ hiện thông báo đã đặt vé thành công
  alert("Đã đặt vé thành công!");
});
const seats = document.querySelectorAll(".rowseat li");

seats.forEach(function (seat) {
  seat.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn event bubbling
    this.classList.toggle("selected");
  });
});
