const games = ["Mario Kart" , "Minecraft" , "Tetris"];
const output = document.getElementById("output");

let text = "";

for (const game of games) {
    text += game + " | "; 
}

output.textContent = text;