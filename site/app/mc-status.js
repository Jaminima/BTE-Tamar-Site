function setServerStatus(ip, elementId) {
    $.getJSON("https://api.mcsrvstat.us/3/"+ip, function(data) {
        const statusElement = $("#"+elementId);

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
    //https://api.mcsrvstat.us/3/whitegoat.co.uk
    //get the status of the server
    setServerStatus("whitegoat.co.uk", "vanilla-status");
    setServerStatus("whitegoat.co.uk:24565", "orange-status");
});