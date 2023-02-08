var button1 = parent.document.frame1.document.getElementById("button1");
var textarea1 = parent.document.frame1.document.getElementById("textarea1");

var button2 = parent.document.frame2.document.getElementById("button2");
var textarea2 = parent.document.frame2.document.getElementById("textarea2");

button1.addEventListener("click", function () {
  textarea2.value = textarea1.value;
});

button2.addEventListener("click", function () {
  textarea1.value = textarea2.value;
});
