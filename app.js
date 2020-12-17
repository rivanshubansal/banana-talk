var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURl(text) {
  return serverURL + "?" + "text=" + text;
}


function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server: try after some time")
}

function clickHandler() {
  // outputDiv.innerText = "Rivanshu " + txtInput.value;
  var inputText = txtInput.value; // taking input
  // calling server for processing
  fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)



// https://repl.it/@tanaypratap/lessonfourapi
// https://github.com/tanaypratap/teamtanay.jobchallenge.dev/issues/232