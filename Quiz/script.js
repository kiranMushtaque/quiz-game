document.getElementById("submitButton").addEventListener("click", function () {
  let result = document.getElementById("result");
  result.innerHTML = ""; // Clear any previous result

  let score = 0;
  let feedback = "";

  // Check Question 1
  let q1 = document.querySelectorAll('input[name="question1"]:checked');
  if (Array.from(q1).some((input) => input.value === "Kamran Tessori")) {
    score++;
  }

  // Check Question 2
  let q2 = document.querySelectorAll('input[name="question2"]:checked');
  if (
    Array.from(q2).some(
      (input) => input.value === "Programming language developed by Microsoft"
    )
  ) {
    score++;
  }

  // Check Question 3
  let q3 = document.querySelectorAll('input[name="question3"]:checked');
  if (
    Array.from(q3).some((input) => input.value === "TypeScript Compiler (tsc)")
  ) {
    score++;
  }

  // Display result
  if (score === 3) {
    feedback = "All answers are correct!";
    result.className = "green";
  } else if (score === 2) {
    feedback = "You got 2 answers right!";
    result.className = "orange";
  } else {
    feedback = "Oops! Try again!";
    result.className = "red";
  }

  result.innerHTML = `${feedback} You scored ${score}/3.`;
});
