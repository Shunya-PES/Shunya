const $ = (selector) => {
  return document.querySelector(selector);
};

const images = ["img1", "img2", "img3", "img4", "img5"];
var hideIndex = 0;
var newNextIndex = 4;

function next(parentClassName) {
  if ($(`.${parentClassName} .hide`)) {
    $(`.${parentClassName} .hide`).remove();
  }

  if ($(`.${parentClassName} .prev`)) {
    $(`.${parentClassName} .prev`).classList.add("hide");
    $(`.${parentClassName} .prev`).classList.remove("prev");
  }

  $(`.${parentClassName} .act`).classList.add("prev");
  $(`.${parentClassName} .act`).classList.remove("act");

  $(`.${parentClassName} .next`).classList.add("act");
  $(`.${parentClassName} .next`).classList.remove("next");

  $(`.${parentClassName} .new-next`).classList.remove("new-next");

  const addedEl = document.createElement("div");

  $(`.${parentClassName}`).appendChild(addedEl);

  let hideImg = images.shift();
  images.push(hideImg);
  addedEl.classList.add("next", "new-next", "img", hideImg);
}

function prev(parentClassName) {
  $(`.${parentClassName} .new-next`).remove();

  $(`.${parentClassName} .next`).classList.add("new-next");

  $(`.${parentClassName} .act`).classList.add("next");
  $(`.${parentClassName} .act`).classList.remove("act");

  $(`.${parentClassName} .prev`).classList.add("act");
  $(`.${parentClassName} .prev`).classList.remove("prev");

  $(`.${parentClassName} .hide`).classList.add("prev");
  $(`.${parentClassName} .hide`).classList.remove("hide");

  const addedEl = document.createElement("div");

  let newNextImg = images.pop();
  images.unshift(newNextImg);
  $(`.${parentClassName}`).insertBefore(
    addedEl,
    $(`.${parentClassName}`).firstChild
  );
  addedEl.classList.add("hide", newNextImg, "img");
}

const slide = (element) => {
  const parentClassName = element.parentElement.classList;
  if (element.classList.contains("next")) {
    next(parentClassName);
  } else if (element.classList.contains("prev")) {
    prev(parentClassName);
  }
};

const slider = $(".list");

/*Automatic*/

var automaticSlide = setInterval(() => {
  let slide1 = $(".list .next");
  let slide2 = $(".list2 .next");
  slide(slide1);
  slide(slide2);
}, 2000);

slider.onclick = (event) => {
  clearInterval(automaticSlide);
  slide(event.target);
  // slide(event.target);
};

const slider2 = $(".list2");

slider2.onclick = (event) => {
  clearInterval(automaticSlide);
  slide(event.target);
  // slide(event.target);
};
