const button = document.getElementById("countButton");
const countText = document.getElementById("count");

let count = 1;

button.addEventListener("click" ,function () {
    count++;
    countText.textContent = count;
});