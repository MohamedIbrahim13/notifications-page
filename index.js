const toggleBtn = document.querySelector("button");
const notificationNum = document.querySelector("h1 span");
const activeNotifications = document.querySelectorAll(".active");
const unreadMsgs = document.querySelectorAll(".circle");

toggleBtn.addEventListener("click", e => {
  e.preventDefault();
  notificationNum.style.display = "none";
  activeNotifications.forEach(ele => {
    ele.classList.remove("active");
  });
  unreadMsgs.forEach(ele => {
    ele.style.display = "none";
  });
});
