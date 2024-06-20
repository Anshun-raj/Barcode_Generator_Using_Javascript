let inpt = document.getElementById("txt");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  JsBarcode("#barcode", inpt.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });
});

window.onload = (event) => {
  input.value = "";
};
