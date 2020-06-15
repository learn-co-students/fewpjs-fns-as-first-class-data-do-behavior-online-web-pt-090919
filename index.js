/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  if (timeString.split(':')[0] < 12) {
    return 'Good Morning';
  }
  if (timeString.split(':')[0] > 12 & timeString.split(':')[0] < 17) {
    return 'Good Afternoon';
  }
  if (timeString.split(':')[0] > 17) {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}
