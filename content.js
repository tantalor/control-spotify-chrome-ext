chrome.runtime.onMessage.addListener(messageRecv);

function messageRecv(request) {
  window.postMessage({
    type: 'from-content-script',
    text: JSON.stringify(request)}, '*');
}

var s = document.createElement("script");
s.src = chrome.extension.getURL("inject.js");
s.onload = function() {
  this.parentNode.removeChild(this);
};
document.body.appendChild(s);
