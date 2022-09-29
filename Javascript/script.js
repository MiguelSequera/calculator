const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const point = document.querySelector(".point");
const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const divi = document.querySelector(".divi");
const multi = document.querySelector(".multi");
const resultado = document.querySelector(".resultado");
const showPantalla = document.getElementById("resultado");
const sqrt = document.querySelector(".sqrt");
const back = document.querySelector(".back");
const clear = document.querySelector(".clear");

num1.addEventListener("click", addNumber);
num2.addEventListener("click", addNumber);
num3.addEventListener("click", addNumber);
num4.addEventListener("click", addNumber);
num5.addEventListener("click", addNumber);
num6.addEventListener("click", addNumber);
num7.addEventListener("click", addNumber);
num8.addEventListener("click", addNumber);
num9.addEventListener("click", addNumber);
num0.addEventListener("click", addNumber);
point.addEventListener("click", addNumber);
add.addEventListener("click", question);
substract.addEventListener("click", question);
divi.addEventListener("click", question);
multi.addEventListener("click", question);
resultado.addEventListener("click", question);
sqrt.addEventListener("click", question);
back.addEventListener("click", question);
clear.addEventListener("click", question);

data = [];
let indicator = 0;
let first = 0;
let second = 0;
let result = 0;

function addNumber(number) {
  const showScreen = number.srcElement.textContent;
  data.push(showScreen);
  showPantalla.innerText = data.join("");
  return;
}

function question(operator) {
  const op = operator.srcElement.textContent;

  switch (op) {
    case "Raiz":
      indicator = 0;
      first = Number(data.join(""));
      first = calculate.sqrt(first);
      showPantalla.innerText = first;
      data = [];
      break;

    case "+":
      indicator = 1;
      first = Number(data.join(""));
      showPantalla.innerText = op;
      data = [];
      break;

    case "-":
      indicator = 2;
      first = Number(data.join(""));
      showPantalla.innerText = op;
      data = [];
      break;

    case "*":
      indicator = 3;
      first = Number(data.join(""));
      showPantalla.innerText = op;
      data = [];
      break;

    case "/":
      indicator = 4;
      first = Number(data.join(""));
      showPantalla.innerText = op;
      data = [];
      break;

    case "Back":
      data.pop();
      showPantalla.innerText = data.join("");
      console.log({ data });
      break;

    case "C":
      data = [];
      showPantalla.innerText = data.join("");
      console.log({ data });
      break;

    case "=":
      second = Number(data.join(""));
      if (indicator == 0) {
        result = calculate.addition(first, second);
        showPantalla.innerText = result;
        break;
      }
      if (indicator == 1) {
        result = calculate.addition(first, second);
        showPantalla.innerText = result;
        break;
      }
      if (indicator == 2) {
        result = calculate.substract(first, second);
        showPantalla.innerText = result;
        break;
      }
      if (indicator == 3) {
        result = calculate.multi(first, second);
        showPantalla.innerText = result;
        break;
      }
      if (indicator == 4) {
        result = calculate.div(first, second);
        showPantalla.innerText = result;
        break;
      } else {
        result = "error";
        break;
      }
      break;
  }
}
