const form = document.getElementById("priceForm");
const priceInput = document.getElementById("priceInput");
const input = document.getElementById("number");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const verd = Number(priceInput.value);
  const fjoldi = Number(input.value);

  const heildarverd = verd * fjoldi;

  output.textContent = `Heildarverð: ${heildarverd} kr.`;
});
