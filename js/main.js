// Import lớp đối tượng
import { ToDo } from "./todo.js";
import { ToDoList } from "./todoList.js";

let todoList_instance = new ToDoList();
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
    console.log(todoList_instance.todoArray)
}

getELE("addItem").addEventListener("click", () => {
    addToDo();
})