function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
   
  }
  boxesContainer.innerHTML = "";
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; 
}
document.querySelector("[data-create]").addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  const amount = parseInt(inputValue);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Doğruysa kutuları oluştur
  }
  document.querySelector("input").value = "";
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);



// Başka bir projede bu yöntem lazım olabilir!

  // function createBoxes(amount) {
//   const boxesContainer = document.getElementById("boxes");
//   boxesContainer.innerHTML = "";

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     const size = 30 + i * 10; 
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);
//   }
// }