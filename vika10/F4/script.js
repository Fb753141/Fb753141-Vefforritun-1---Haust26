const leikir = ["Minecraft", "Tetris", "Zelda", "Fortnite", "Pac-Man"];
const gameList = document.querySelector("#gameList");

for (const leikur of leikir) {
  const li = document.createElement("li");
  li.textContent = leikur;
  gameList.appendChild(li);
}