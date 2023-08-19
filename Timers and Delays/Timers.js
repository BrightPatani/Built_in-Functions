// settimeout and cleartimeout

var hello;

function myFunction() {
  alert("Hello!.... How are you?");
}

document.getElementById("tryButton").addEventListener("click", function() {
  hello = setTimeout(myFunction, 4000); // Delayed alert after 4000 milliseconds (4 seconds)
});

document.getElementById("stopButton").addEventListener("click", function() {
  clearTimeout(hello); // Stop the delayed alert
});


// setinterval and clearinterval

var counter = 0;
var intervalId;

var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", function() {
  if (!intervalId) {
    intervalId = setInterval(updateCounter, 1000);
    startButton.disabled = true;
  }
});

stopButton.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null;
  startButton.disabled = false;
});

function updateCounter() {
  counter++;
  document.getElementById("counter").textContent = counter;
}
