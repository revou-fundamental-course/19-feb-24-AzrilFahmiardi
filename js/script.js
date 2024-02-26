function replaceName() {
  let visitor = prompt("Siapakah nama anda?", "");
  document.getElementById("visitor").innerHTML = visitor;
}

addEventListener("load", replaceName);
