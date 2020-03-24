/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  if (parseInt(string, 10) < 12) {
    return "Good Morning"
  }
  else if (parseInt(string, 10) >17) {
    return "Good Evening"
  }
  else {
      return "Good Afternoon"
  }
}

function displayMessage(testContent) {
  document.getElementById("greeting").innerText = testContent
}
