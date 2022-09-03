// animating ourSkills Section onscroll
let ourSkills = document.getElementById("our-skills");
let progressBars = document.querySelectorAll(".progress-bar span");

window.addEventListener("scroll", () => {
  if (
    this.scrollY + 300 >
    ourSkills.offsetTop + ourSkills.offsetHeight - this.innerHeight
  ) {
    progressBars.forEach((ele) => {
      ele.style.width = `${ele.dataset.progress}`;
    });
  }
});

// set Event Countdown

let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let days = document.getElementById("days");

function countDown(ele, time) {
  setInterval(() => {
    if (ele.textContent == "1") {
      if (ele == seconds || ele == minutes) {
        ele.textContent = "61";
      } else if (ele == days) {
        ele.textContent = "500";
      } else ele.textContent = "25";
    }
    ele.textContent = `${Number(ele.textContent) - 1}`;
  }, time);
}

countDown(seconds, 1000);
countDown(minutes, 1000 * 60);
countDown(hours, 1000 * 60 * 60);
countDown(days, 1000 * 60 * 60 * 60);
