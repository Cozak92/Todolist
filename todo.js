const   toDoForm = document.querySelector(".js-toDoForm"),
        toDoInput = toDoForm.querySelector("input"),
        toDoList = document.querySelector(".js-toDolist");

const TO_DOLS = `toDos`;
const whatToDo = [];

function deleteTodo(event){

    const btn = event.target.parentNode;
    toDoList.removeChild(btn);
    const CleanToDos = whatToDo.filter(function(toDo){
        return toDo.id !== parseInt(btn.id);
    })

    saveToDos(CleanToDos);

}

function saveToDos(lists){
    localStorage.setItem(TO_DOLS,JSON.stringify(lists));

}

function paintToDO(text){
    const   list = document.createElement("li"),
            makeDelBtn = document.createElement("button"),
            span = document.createElement("span"),
            newId = whatToDo.length + 1;

    makeDelBtn.innerText ="❌" 
    makeDelBtn.addEventListener("click",deleteTodo);
    span.innerText = text;

    list.appendChild(span);
    list.appendChild(makeDelBtn);
    list.id = newId;
    toDoList.appendChild(list);

    const toDoObj = {
        text : text,
        id : newId
    };
    whatToDo.push(toDoObj);
    saveToDos(whatToDo);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value="";

}

function loadToDos(){
    const toDos = localStorage.getItem(TO_DOLS);
    if (toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(function(todo){
            paintToDO(todo.text);
        });
    }
   

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();