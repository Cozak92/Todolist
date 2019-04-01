const   form = document.querySelector(".js-form"),
        input = form.querySelector("input"),
        greeting = document.querySelector(".js-greetings");
        

    
const   USER_LS = 'currentUser';
        Showin_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askingName(){
    form.classList.add(Showin_CN);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(Showin_CN);
    greeting.classList.add(Showin_CN);
    greeting.innerText = `Hello! ${text}`;

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askingName();
    } else{
        paintGreeting(currentUser);

    }
}


function init(){
    loadName();

}

init();