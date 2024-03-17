const body = document.querySelector("body");
const content = document.querySelector(".content");

const btn = document.createElement("button");
btn.setAttribute(
  "style",
  "padding: 10px; background-color: blue; color: white;"
);
btn.textContent = "Enter number of squares";
body.insertBefore(btn, content);

btn.classList.add("center-button");


let squares = 0;

btn.addEventListener("click", () => {
  let validInput = false;

  while (!validInput) {
    const input = prompt("Please enter a number: ");

    if (input === null) {
      break;
    }

    squares = parseInt(input);

    if (isNaN(squares)) {
      alert("Please enter a valid number");
    } else if (squares > 100) {
      alert("Number must not exceed 100");
    } else {
      validInput = true;
    }
  }

  btn.classList.remove("center-button");

  for (let i = 0; i < squares*squares; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
  
    content.appendChild(div);
  }
  
  content.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
      e.target.setAttribute(
        "style",
        "background-color: blue; transition: 0.1s ease-out"
      );
    }
  });
  
  let width = squares * 8;
  let height = squares * 8;

  content.style.width = width + "px";
  content.style.height = height + "px";

});



