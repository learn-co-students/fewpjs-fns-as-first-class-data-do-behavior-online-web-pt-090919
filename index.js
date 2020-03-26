/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  let timeSplit = timeString.split(":")[0]
  let timeInt = parseInt(timeSplit, 10)
  if (timeInt < 12) {
    return `Good Morning`
  } else if (12 <= timeInt && timeInt<= 17) {
    return `Good Afternoon`
  } else if (timeInt > 17) {
    return `Good Evening`
  }
}

/* Write your implementation of displayMessage() */
// Updates DOM with an appropriate message
// can't define a function and pass in function as arg (with another arg)
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}
