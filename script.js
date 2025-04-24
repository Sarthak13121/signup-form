const slidePage = document.querySelector(".slidepage");
const nextBtn1 = document.querySelector(".nextbtn button");
const nextBtn2 = document.querySelector(".next-1");
const nextBtn3 = document.querySelector(".next-2");
const prevBtn2 = document.querySelector(".prev-1");
const prevBtn3 = document.querySelector(".prev-2");
const prevBtn4 = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

const bullets = document.querySelectorAll(".bullet");
const progressTexts = document.querySelectorAll(".step p");
const progressChecks = document.querySelectorAll(".step .check");

let current = 1;

nextBtn1.addEventListener("click", (e) => {
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    updateProgress(current);
    current++;
});

nextBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    updateProgress(current);
    current++;
});

nextBtn3.addEventListener("click", (e) => {
    e.preventDefault();
    slidePage.style.marginLeft = "-75%";
    updateProgress(current);
    current++;
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateProgress(current);
    console.log("submit button:",submitBtn)
    current++;
    setTimeout(() => {
        alert("You're successfully signed up");
        location.reload();
    }, 800);
});

prevBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    slidePage.style.marginLeft = "0%";
    rollbackProgress(current - 2);
    current--;
});

prevBtn3.addEventListener("click", (e) => {
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    rollbackProgress(current - 2);
    current--;
});

prevBtn4.addEventListener("click", (e) => {
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    rollbackProgress(current - 2);
    current--;
});

function updateProgress(index) {
    bullets[index].classList.add("active");
    progressTexts[index].classList.add("active");
    progressChecks[index].classList.add("active");
}

function rollbackProgress(index) {
    bullets[index].classList.remove("active");
    progressTexts[index].classList.remove("active");
    progressChecks[index].classList.remove("active");
}
