import name from "./modules/name.js";

var submit = document.getElementById("submit");
var input_field = document.getElementById("input_field");
var replace = document.getElementById("replace");

submit.addEventListener("click", submit_click);
input_field.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submit_click();
  }
});

function submit_click() {
  var check = name;
  if (input_field.value) {
    check = input_field.value;
  }
  replace.innerHTML = check;
}
