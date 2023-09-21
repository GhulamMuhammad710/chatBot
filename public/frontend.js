let botBtn=document.querySelector(".bot-btn");
let chatBox=document.querySelector("#chat-box");
let chatArea=document.querySelector(".chat-area");
let chatBoxBotBtn=document.querySelector("#chat-box .bot-btn");
let sendBtn=document.querySelector(".send-btn");
let textInBox=document.querySelector(".text-inbox");


//.......................code for bot btn
function doit(){
    botBtn.classList.toggle("dis");
    chatBox.classList.toggle("dis");
}
botBtn.addEventListener("click",doit);
chatBoxBotBtn.addEventListener("click",doit);

//.............................................


sendBtn.addEventListener("click",function(){
    let userText=document.createElement("h3");
    userText.setAttribute("class","user-text");
    userText.textContent=textInBox.value;
    chatArea.appendChild(userText);

    let botTxt=document.createElement("h3");
    botTxt.setAttribute("class","bot-text");
    botTxt.textContent="You need any help y/n";
    setTimeout(function(){
        chatArea.appendChild(botTxt);
    },2000);

    if(textInBox.value==="y"){
        botTxt.textContent="Ok i am going to help you";
        setTimeout(function(){
            chatArea.appendChild(botTxt);
        },2000);
    }
    textInBox.value="";
})