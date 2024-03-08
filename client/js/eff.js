function changeClass(element) {
  var links = document
    .getElementsByClassName("topnav")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  element.classList.add("active");
}
