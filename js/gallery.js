const pictureInnerContainer = document.querySelector(
  ".picture-inner-container"
);
const img = document.createElement("img");
img.classList.add("gallery-img");
img.src = `assets/img/galery/galery1.jpg`;
img.alt = `galery1`;
pictureInnerContainer.append(img);
