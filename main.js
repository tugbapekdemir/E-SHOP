// html deki elemanlara eriş

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// menuBtn elemanına tıklanınca nav ve header elemanına class ekle

menuBtn.addEventListener("click", () => {
  // header'a nav-active classı ekle
  header.classList.add("nav-active");

  // nav elemanına avtive clası ekle
  nav.classList.add("active");

  // menubtn gizle

  menuBtn.style.display = "block";
});

// close btn elamanına tıklnınca header nav elemnından classı kaldır
closeBtn.addEventListener("click", () => {
  header.classList.remove("nav-active");
  nav.classList.remove("active");
  // menu btn aktif et
  menuBtn.style.display = "block";

  //  menu btn pasife çek
  closeBtn.style.display = "none";
});
