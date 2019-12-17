chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message == "helloWorld"){
            console.log("HelloWorld");
            sendResponse({message: "said hello"});
        }
    });