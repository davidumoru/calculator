/*
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");

const numberBtn = document.querySelectorAll(".numbers");
const operatorBtn = document.querySelectorAll(".operator");

const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");

const history = document.querySelector("#history");
const output = document.querySelector("#output");

history.textContent = "";
output.textContent = "";

let num = [],
  result,
  operator;

const getUserInput = () => {};

const add = (num) => {
  for (let x = 0; num.length; i++) {
    result = num[i] + num[i + 1];
  }
  return result;
};

console.log(add(2,3,4,5,6))


const subtract = (num) => {
  for (let x = 0; num.length; i++) {
    result = num[i] - num[i + 1];
  }
  return result;
};

const multiply = (num) => {
  for (let x = 0; num.length; i++) {
    result = num[i] * num[i + 1];
  }
  return result;
};

const divide = (num) => {
  for (let x = 0; num.length; i++) {
    result = num[i] / num[i + 1];
  }
  return result;
};

const operate = (num, operator) => {
  switch (operator) {
    case "+":
      result = add(num);
    case "-":
      result = subtract(num);
    case "x":
      result = multiply(num);
    case "/":
      result = divide(num);
    default:``
      return "Error";
  }
};

let i = 0;
numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    history.textContent += button.textContent;
    num[i] = button.textContent;
    console.log(`${i}: ${num[i]}`);
    i++;
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent !== "=") {
      history.textContent += button.textContent;
    }
  });
});

operator = "+";
equalBtn.addEventListener("click", () => {

  output.textContent = `= ${result}`;
  console.log(result);
});

clearBtn.addEventListener("click", () => {
  output.textContent = "";
  history.textContent = "";
  i = 0;
});

*/

let result = 0;

const add = (num) => {
  for (let i = 0; i < num.length; i++) {
    result = num[i] + num[i + 1];
  }
  return result;
};

array = [2, 4, 6, 6];
console.log(add(array));
