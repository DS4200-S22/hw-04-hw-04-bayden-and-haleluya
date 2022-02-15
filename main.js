function disappearAppear() {
    var element = document.getElementById("circle3");
    if (element.style.opacity == 0) {
        element.style.opacity = 1;
    } else {
        element.style.opacity = 0;
    }
}