chrome.runtime.onMessage.addListener(messageRecv);

function messageRecv(request) {
  console.log(request)
}
