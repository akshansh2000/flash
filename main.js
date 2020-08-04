console.log("running");

chrome.input.ime.onKeyEvent.addListener(function (engineID, keyData) {
  if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
    console.log("running");
  }
});
