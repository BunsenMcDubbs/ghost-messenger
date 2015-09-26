var textBox;
var submitButton;
var messageLog;
var friendName;

// find the textbox and submit buttons
function init() {
  console.log("loading");
  friendName = document.getElementsByClassName("_57j0")[0].getElementsByTagName('a')[0].innerText;
  textBox = document.getElementsByClassName('_1rt')[0].children[0];
  submitButton = document.getElementsByClassName('_1ri')[0];
  messageLog = document.getElementsByClassName("_2ne _4kg")[0];

  var previousMessage = "";
  var observer = new MutationObserver(function(mutations) {
  	mutations.forEach(function(mutation) {
      var li = messageLog.children[messageLog.children.length - 1];
      var rawText = li.children[1].children[1].children[1].innerText;
      if (mutation.addedNodes.length === 0 || li.textContent === previousMessage) {
        previousMessage = li.textContent;
        return;
      }
      console.log(new Date(), rawText);
      previousMessage = li.textContent;
      var sender = rawText.substring(0, friendName.length);
      if (sender == friendName) {
        var newMessage = rawText.substring(friendName.length).trim();
        console.log("new message from", sender, "is", newMessage);
      }
  	});
  });

  var observerConfig = {
  	childList: true
  };

  // Node, config
  observer.observe(messageLog, observerConfig);
}

function setMessage(message) {
  console.log("setting message to ", message);
  if (!textBox) {
    console.log("not initialized or initialization failed");
  }
  textBox.value = message;
}

function sendMessage(message) {
  console.log("trying to send", message);
  if (!textBox || !submitButton) {
    console.log("not initialized or initialization failed");
  }
  textBox.value = message;
  submitButtom.click();
  console.log("sent");
}

setTimeout(function() {
  init();
  // setMessage("dank memes");
}, 1000);
