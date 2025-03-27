const hamburger = document.querySelector("#nav-icon1");

hamburger.addEventListener("click", () => {
  let el = document.querySelector("#nav-icon1");
  let popup = document.querySelector(".popup");

  if (el.classList.contains("open")) {
    el.classList.remove("open");
    popup.classList.remove("open-box");
    return;
  }
  el.classList.add("open");
  popup.classList.add("open-box");
});
