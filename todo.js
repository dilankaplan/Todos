//Tüm elementleri seçme
const form =document.querySelector("#todo-form");
const todoInput =document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody =document.querySelectorAll(".card-body")[0];
const secondCardBody =document.querySelectorAll(".card-body")[1];
const filter =document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos")

eventListener(); //Tüm event Listenerlar

function eventListener(){
    form.addEventListener("submit",addTodo) ;
    document.addEventListener("DOMContentloaded",loasAllTodosToUI);


}
function loadAllTodosToUI(){
  let todos= getTodosFromStorage();
  todos.forEach(function(todo){
     addTodoToUI(todo);

  })
}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    if(newTodo === ""){
      
        showAlert("danger","Lütfen bir Todo girin");
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarıyla eklendi")
    }
    
    e.preventDefault();
}
function getTodosFromStorage(){//Strogaedan bütün todoları alıcak
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
    let todos =getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
function showAlert(type,message){
    const alert =document.createElement("div");
    alert.className = 'alert alert-${type}'
    alert.textContent = message;
    firstCardBody.appendChild(alert);
     setTimeout(function(){
         alert.remove();

     },1000);

}
function addTodoToUI(newTodo){ //Stringleri list item olarak ekleyecek
    //list item oluşturma
    const listItem =document.createElement("li");
    //link oluşturma
    const link =document.createElement("a");
    link.href = "#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>"

    listItem.className="<li class='list-group-item d-flex justify-content-between'>"

    //Text Node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo Liste  List Item ekleme
    todoList.appendChild(listItem);
    todoInput.value="";

}