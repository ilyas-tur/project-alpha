let currentShape = null;

const colors = [
  {
    title: "Красный",
    hex: "#E32636",
  },
  {
    title: "Желтый",
    hex: "#FDE910",
  },
  {
    title: "Зеленый",
    hex: "#138808",
  },
  {
    title: "Синий",
    hex: "#1560BD",
  },
];

const colorContainer = document.getElementById("color-buttons");
for (const { title, hex } of colors) {
  const button = document.createElement("button");
  button.classList.add("color-btn");

  const square = document.createElement("span");
  square.classList.add("color-square");
  square.style.backgroundColor = hex;
  button.append(square);

  const text = document.createTextNode(title);
  button.append(text);

  button.addEventListener("click", () => changeColor(hex));
  colorContainer.append(button);
}

const shapeButtons = [
  { id: "circle-btn", shape: "circle" },
  { id: "square-btn", shape: "square" },
];

for (const { id, shape } of shapeButtons) {
  document
    .getElementById(id)
    .addEventListener("click", () => selectShape(shape));
}

document.getElementById("add-text-btn").addEventListener("click", addText);

document.getElementById("clear-btn").addEventListener("click", clearDisplay);

function selectShape(shape) {
  const display = document.getElementById("display");
  display.innerHTML = "";

  const element = document.createElement("div");

  if (shape === "circle") {
    element.classList.add("circle");
  } else if (shape === "square") {
    element.classList.add("square");
  }

  element.setAttribute("id", "currentShape");
  display.append(element);
  currentShape = element;
}

function changeColor(color) {
  if (!currentShape) {
    alert("Сначала выберите фигуру!");
    return;
  }
  currentShape.style.backgroundColor = color;
}

function addText() {
  let inputText = document.getElementById("input-text");
  let text = inputText.value.trim();

  if (!currentShape) {
    if (!text) {
      alert("Добавьте текст!");
    } else {
      alert("Сначала выберите фигуру!");
    }
    return;
  }

  if (!text) {
    alert("Добавьте текст!");
    return;
  }

  currentShape.textContent = text;
  currentShape.classList.add("with-text");

  inputText.value = "";
}

function clearDisplay() {
  const display = document.getElementById("display");
  const inputText = document.getElementById("input-text");

  display.innerHTML = "";
  currentShape = null;
  inputText.value = "";
}
