// chrome.input.ime.onKeyEvent.addListener(function (engineID, keyData) {
//   console.log("nice");
//   if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) alert("YES");
// });

// chrome.input.ime.onclick = function (ev) {
//   console.log("nice");
// if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) alert("YES");
// };

var context_id = -1;

chrome.input.ime.onFocus.addListener(function (context) {
  alert("focus");
  context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(function (engineID, keyData) {
  alert("keyEvent");
  if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
    chrome.input.ime.commitText({
      contextID: context_id,
      text: keyData.key.toUpperCase(),
    });
    return true;
  } else {
    return false;
  }
});
