const colors = [
  "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
  "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
  "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
];

let count = 0;
const buttonsClasses = document.querySelectorAll("button");

const recalculate = () => {};

const callChangeBackground = (e) => {
  console.log(buttonsClasses);
  document.body.style.background = colors[count % colors.length];

  count++;
  if (!(count % 4)) {
    const newButton = document.createElement("button");
    newButton.innerText = `Color ${e + 2}`;

    document.body.append(newButton);
  }
};

buttonsClasses.forEach((e, ind) =>
  e.setAttribute("onclick", `callChangeBackground(${ind})`)
);
