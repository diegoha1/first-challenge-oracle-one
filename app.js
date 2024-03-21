let buttonEncrypt = document.querySelector(".encrypt-button");
let buttonDecrypt = document.querySelector(".decrypt-button");
let doll = document.querySelector(".doll");
let result = document.querySelector(".text-result");

buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;

function encrypt(){
    hideFront();
    let textArea = recoverText();
    result.textContent = encryptText(textArea);
}

function decrypt(){
    hideFront();
    let textArea = recoverText();
    result.textContent = decryptText(textArea);
}

function recoverText(){
    let textArea = document.querySelector(".text-input");
    return textArea.value;
}

function hideFront(){
    doll.classList.add("hide");
}

function encryptText(message){
    let text = message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai";
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter";
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes";
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober";
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat";
        }
        else{
            finalText = finalText + text[i];
        }
    }
    return finalText;
}

function decryptText(message){
    var text = message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a";
            i = i+1;
        }
        else if(text[i] == "e"){
            finalText = finalText + "e";
            i = i+4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i";
            i = i+3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o";
            i = i+3;
        }
        
        else if(text[i] == "u"){
            finalText = finalText + "u";
            i = i+3;
        }
        else{
            finalText = finalText + text[i];
        }   
    }
    return finalText;
}

const copyButton = document.querySelector(".copy-button");
copyButton.addEventListener('click', (event) => {
    let content = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(content);
});
