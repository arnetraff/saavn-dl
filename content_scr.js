
console.log("EXT LOADED");
isSet = false;
browser.runtime.onMessage.addListener(request => {
  console.log("Message from the background script:");
  console.log(request.url);
  var a = document.getElementsByClassName("meta-wrap");
  console.log("=>Length"+a.length);
  	if ( a != null && isSet == false ) {
  	isSet = true;
  	a[0].innerHTML += '<a class="btn x-small green" style="display: inline;margin:-2px 0px 0 0;float:right;padding:3px 9px;" download="song.mp3" target="_blank" href="'+request.url+'">Download</a>';
  	console.log("Inserted");
  }

});