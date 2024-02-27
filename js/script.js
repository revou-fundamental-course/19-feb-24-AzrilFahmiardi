function replaceName() {
  let visitor = prompt("Siapakah nama anda?", "");
  document.getElementById("visitor").innerHTML = visitor;
}

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("output-nama").innerHTML = name;
  document.getElementById("output-tanggal-lahir").innerHTML = birthDate;
  document.getElementById("output-gender").innerHTML = gender;
  document.getElementById("output-pesan").innerHTML = messages;
}

function validateForm(event) {
  const name = document.forms["message-form"]["fullname"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Data tidak boleh kosong");
    event.preventDefault();
  }

  setSenderUI(name, birthDate, gender, messages);
  event.preventDefault();
}

let submit = document.getElementById("submit");

addEventListener("load", replaceName);
submit.addEventListener("click", validateForm);
