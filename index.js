let boxs = [...document.querySelectorAll(".box")];

let currentType = "x";

const initGame = () => {
  currentType = "x";

  boxs.forEach((box) => {
    box.textContent = "";
    box.classList.remove("stopClick", "x", "o");
  });
};

const stopClick = () => {
  boxs.forEach((box) => box.classList.add("stopClick"));
};

const checkIsWin = () => {
  const boxsData = boxs.map((box) => box.textContent);

  if (
    // accidental win
    (boxsData[0] === currentType &&
      boxsData[1] === currentType &&
      boxsData[2] === currentType) ||
    (boxsData[3] === currentType &&
      boxsData[4] === currentType &&
      boxsData[5] === currentType) ||
    (boxsData[6] === currentType &&
      boxsData[7] === currentType &&
      boxsData[8] === currentType) ||
    // longitudinal win
    (boxsData[0] === currentType &&
      boxsData[3] === currentType &&
      boxsData[6] === currentType) ||
    (boxsData[1] === currentType &&
      boxsData[4] === currentType &&
      boxsData[7] === currentType) ||
    (boxsData[2] === currentType &&
      boxsData[5] === currentType &&
      boxsData[8] === currentType) ||
    // definitive win
    (boxsData[2] === currentType &&
      boxsData[4] === currentType &&
      boxsData[6] === currentType) ||
    (boxsData[0] === currentType &&
      boxsData[4] === currentType &&
      boxsData[8] === currentType)
  ) {
    stopClick();

    setTimeout(() => {
      // get lasted type
      const type = currentType === "x" ? "o" : "x";

      alert(`${type} is winner`);
      initGame();
    }, 1000);
  }
};

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    box.textContent = currentType;
    box.classList.add(currentType);

    checkIsWin(box.textContent);
    return (currentType = currentType === "x" ? "o" : "x");
  });
});
