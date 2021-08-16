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


}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    addTodoToUI(newTodo);




    e.preventDefault();
}
function addTodoToUI(newTodo){ //Stringleri list item olarak ekleyecek
    /* <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
    </li> */
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