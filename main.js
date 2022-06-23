let s = document.querySelector(".select__btn");
let s0 = document.querySelector(".select__span")
let s1 = document.querySelector(".select__body");
let s2 = document.querySelectorAll(".select__item")

s.addEventListener("click", () => {
    s.classList.toggle("select__a");
    s1.classList.toggle("select__active");
})
s2.forEach(e => {
    e.addEventListener("click", () => {
        s.classList.toggle("select__a");
        s1.classList.toggle("select__active");
        s0.innerHTML = e.innerHTML;
    })
});