function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const handleClick = (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  return span.textContent = document.body.style.backgroundColor;
};

button.addEventListener("click", handleClick);
