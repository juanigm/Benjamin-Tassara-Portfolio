const videos = document.querySelector('.ase');
const modal = document.querySelector('.modal');
const iframe = document.querySelector('.testa');
const modalContainer = document.querySelector('.modal__content');
const close = document.querySelector('.btn-close');
const bg = document.querySelector(".modal-bg");

videos.addEventListener("click", () => {
    modal.classList.add("modal-open");
    bg.classList.add("modal-open");
    let yt = videos.getAttribute("id")
    iframe.setAttribute("src", yt);
});

let num = videos.length;
console.log(num);


close.addEventListener("click", () => {
    modal.classList.remove("modal-open");
    bg.classList.remove("modal-open");
});