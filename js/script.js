function replaceName() {
  let visitor = prompt("Siapakah nama anda?", "");
  document.getElementById("visitor").innerHTML = visitor;
}

function setSenderUI(name, email, messages) {
  document.getElementById("output-nama").innerHTML = name;
  document.getElementById("output-email").innerHTML = email;
  document.getElementById("output-pesan").innerHTML = messages;
}

function validateForm(event) {
  const name = document.forms["message-form"]["fullname"].value;
  const email = document.forms["message-form"]["email"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || email == "" || messages == "") {
    alert("Data tidak boleh kosong");
    event.preventDefault();
  } else {
    setSenderUI(name, email, messages);
    event.preventDefault();
  }
}

let submit = document.getElementById("submit");
addEventListener("load", replaceName);

submit.addEventListener("click", validateForm);

function showArrow() {
  let arrow = document.querySelector(".slide-arrow");
  arrow.style.visibility = "visible";
}

let slideSHow = document.querySelectorAll(".img-slide-show");

slideSHow.forEach(function (slideSHow) {
  slideSHow.addEventListener("mouseenter", showArrow);
});

let slideIndex = 0;
showSlide();

function plusSlide() {
  slideIndex += 1;
  showSlide();
}

function showSlide() {
  let x = document.getElementsByClassName("img-slide-show");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (slideIndex >= x.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = x.length - 1;
  }
  x[slideIndex].style.display = "block";
}

let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

next.addEventListener("click", function () {
  slideIndex += 1;
  showSlide();
});
previous.addEventListener("click", function () {
  slideIndex -= 1;
  showSlide();
});

setInterval(plusSlide, 2000);
