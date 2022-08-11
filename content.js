var isStarted=false;
var refreshIntervalId;
var counter=0;

//extension icon on click
chrome.browserAction.onClicked.addListener(function(tab) 
{ 
    isStarted ? stopTimer():startTimer();
});

function startTimer(){
    counter=0;
    refreshIntervalId = setInterval(count, 1000);
    isStarted = true;
}

function stopTimer(){
    isStarted = false;
    clearInterval(refreshIntervalId);
}

function count(){
    counter++;
    chrome.browserAction.setBadgeText({text:String(counter)});
}
