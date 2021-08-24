// gnb 조작
const gnbBtn = document.querySelector(".gnb-btn");
const gnbBg = document.querySelector(".gnb-menu-wrap");

gnbBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});
gnbBg.addEventListener("click", function () {
  gnbBtn.classList.remove("active");
});
