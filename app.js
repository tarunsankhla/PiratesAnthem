

var btnTranslate  = document.querySelector("#translate_button");
var input  = document.querySelector("#Input_item");
var outputdiv  = document.querySelector("#output");
var minionurl ="https://api.funtranslations.com/translate/pirate.json";

function clickEventHandler(){
    var inputtext =input.value;
    fetch(getTranslationURL(inputtext)).then(res => res.json()).then(json =>  outputdiv.innerHTML = "Translated : "+json.contents.translated ).catch(e => console.log(e))
}

btnTranslate.addEventListener("click",clickEventHandler)
function getTranslationURL(text){
    return minionurl +"?text=" + text ;
}