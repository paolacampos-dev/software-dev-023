const button = document.querySelector("button");
const p = document.querySelector("p");

let count = 0; // state

// event handler
function handleClick() {
  count++;
  p.textContent = count;
}

button.addEventListener("click", handleClick);
