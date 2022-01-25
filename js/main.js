// Import lớp đối tượng
import { ToDo } from "./todo.js";
import { ToDoList } from "./todoList.js";

let todoList_instance = new ToDoList();
let completeList = new ToDoList();

// Hàm rút gọn cú pháp
const getELE = (id) => {
    return document.getElementById(id);
}

// Hàm thêm todo
const addToDo = () => {
    let txtToDo = getELE('newTask').value;
    let ulToDo = getELE('todo');

    if (txtToDo != "") {
        let td = new ToDo(txtToDo, 'todo');
        todoList_instance.addToDo(td);
    }
    showToDoList(ulToDo);
    getELE('newTask').value = "";
}

getELE("addItem").addEventListener("click", () => {
    addToDo();
})

//Hàm hiển thị todo
const showToDoList = (ulToDo) => {
    ulToDo.innerHTML = todoList_instance.renderToDo();
}

const showCompletedList = (ulCompleted) => {
    ulCompleted.innerHTML = completeList.renderToDo();
}

// Hàm delete todo
const deleteToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let ulToDo = getELE("todo");

    console.log(tdIndex);

    todoList_instance.removeToDo(tdIndex);
    console.log(todoList_instance)
    showToDoList(ulToDo);
}
window.deleteToDo = deleteToDo;

const completeToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");

    if (status == "todo") {
        let completedItem = todoList_instance.todoArray.slice(tdIndex, tdIndex + 1);

        let objToDo = new ToDo(completedItem[0].textTodo, "completed");
        moveToDo(todoList_instance, completeList, objToDo, tdIndex);

        showToDoList(ulToDo);
        showCompletedList(ulCompleted);
    } else if (status == "completed") {
        let undoItem = completeList.todoArray.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(undoItem[0].textTodo, "todo");
        moveToDo(completeList, todoList_instance, objToDo, tdIndex);

        showToDoList(ulToDo);
        showCompletedList(ulCompleted);
    } else {
        alert("Cannot move todo");
    }
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, obj, tdIndex) => {
    // Remove todo from depart
    depart.removeToDo(tdIndex);

    // Add todo to arrival
    arrival.addToDo(obj);
}