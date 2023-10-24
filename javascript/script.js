const ratingSpan = document.querySelectorAll(".rating span");

const submit = document.querySelector(".submit");

let rate = 0;

ratingSpan.forEach((s) => {
  s.addEventListener("click", () => {
    ratingSpan.forEach((s) => s.classList.remove("active"));
    s.classList.add("active");
    rate = s.innerHTML;
  });
});

submit.addEventListener("click", () => {});
