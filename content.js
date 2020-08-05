document.addEventListener("keydown", function (event) {
  if (event.target.nodeName == "INPUT" || event.target.nodeName == "TEXTAREA")
    return;

  if (event.key == "/") {
    let elements = document.getElementsByTagName("input");
    for (let element of elements) {
      if (element.outerHTML.toLowerCase().includes("search")) {
        element.focus();
        element.select();
        event.preventDefault();
        break;
      }
    }
  }
});
