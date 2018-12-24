__URL = "";
function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
  if (requestDetails.url.indexOf(".mp3?") != -1) {
  	

	sendMessage(requestDetails.url);
 	console.log("FOUND LINK!");
  }

  
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);



function sendMessageToTabs(tabs) {
	console.log("Method called url - "+__URL);
	console.log(tabs);
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {"url": __URL}
    );
  }
}


function sendMessage(url)
{
	__URL = url;

  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs);
};