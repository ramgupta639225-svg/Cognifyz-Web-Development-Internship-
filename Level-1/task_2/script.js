// ========================================
// Task 1: Change Button Color
// ========================================

function changeColor() {
  const button = document.getElementById("colorButton");

  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
}

// ========================================
// Task 2: Time-Based Greeting
// ========================================

function showGreeting() {
  const currentHour = new Date().getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
}

// ========================================
// Task 3: Addition Calculator
// ========================================

function addNumbers() {
  const number1 = Number(document.getElementById("number1").value);

  const number2 = Number(document.getElementById("number2").value);

  const result = number1 + number2;

  document.getElementById("result").innerText = "Result: " + result;
}
