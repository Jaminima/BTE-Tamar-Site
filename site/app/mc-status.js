function setServerStatus(ip, elementId) {
    const statusElement = $("#"+elementId);

    statusElement.html("Loading...");
    statusElement.css("color", "gray");

    $.getJSON("https://api.mcsrvstat.us/3/"+ip, function(data) {

        if (data.online) {
            statusElement.html("Online "+data.players.online+"/"+data.players.max);
            statusElement.css("color", "green");
        } else {
            statusElement.html("Offline!");
            statusElement.css("color", "red");
        }
    });
}

//when the document loads
$(document).ready(function() {
    setServerStatus("whitegoat.co.uk", "vanilla-status");
    setServerStatus("whitegoat.co.uk:24565", "orange-status");
});