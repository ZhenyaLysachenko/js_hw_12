
let btns = document.querySelectorAll(".btn");

document.addEventListener("keydown", keydown);

function keydown(event) {
  let invalidInput = false;

  btns.forEach((btn) => {
    if (btn.classList.contains("downKeyboard")) {
      btn.classList.remove("downKeyboard");
    }
    if (
      `Key${btn.dataset.key}` == event.code ||
      (event.key == "Enter" && btn.dataset.key == "Enter")
    ) {
      invalidInput = true;
      btn.classList.add("downKeyboard");
    }
  });

  if (!invalidInput) {
    alert(
      `Вы нажали клавишу ${event.key}.\nНажмите клавишу соответствующую кнопке.`
    );
  }
}
