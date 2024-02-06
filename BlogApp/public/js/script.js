let dots = document.querySelectorAll(".post__dots");
let dotsContents = document.querySelectorAll(".post__dots-content");

dots.forEach((el, i) => {
    el.addEventListener('click', () => {
        dotsContents[i].classList.toggle("active");
    })
})