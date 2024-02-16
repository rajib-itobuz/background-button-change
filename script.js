const colors = [
  "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
  "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
  "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
];

let buttonsClasses = document.querySelectorAll("button");

const recalculate = () => {};

const callChangeBackground = (e) => {
  console.log(buttonsClasses);
  document.body.style.background = colors[e];
  buttonsClasses[e].setAttribute("disabled", "true");

  if (e < 5) {
    const newButton = document.createElement("button");
    newButton.innerText = `Color ${e + 2}`;
    newButton.setAttribute("onclick", `callChangeBackground(${e + 1})`);

    document.body.append(newButton);
    buttonsClasses = document.querySelectorAll("button");
  }
};

buttonsClasses.forEach((e, ind) =>
  e.setAttribute("onclick", `callChangeBackground(${ind})`)
);
