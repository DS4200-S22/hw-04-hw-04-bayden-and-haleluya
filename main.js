let click = 0;
function addNumber() {
  let circle1 = document.getElementById("circle1text");
  circle1.innerHTML = parseInt(circle1.innerHTML) + 1;
}

function addBorder() {
  let circle2 = document.getElementById("circle2");
  circle2.setAttribute("stroke", "black");
}

function removeBorder() {
  let circle2 = document.getElementById("circle2");
  circle2.setAttribute("stroke", "white");
}

function disappearAppear() {
  let element = document.getElementById("circle3");
  if (element.style.opacity == 0) {
    element.style.opacity = 1;
  } else {
    element.style.opacity = 0;
  }
}
