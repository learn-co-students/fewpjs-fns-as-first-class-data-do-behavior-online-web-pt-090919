/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let result = time.split(' ').parseInt()
  if (result < 12) {
    return "Good Morning"
  } else if (result > 12 && result < 17) {
    return "Good Afternoon"
  } else if (result > 17) {
  return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage (text) {
  let greeting = document.getElementById('greeting')
  greeting.write(text)
}