export class ToDoList {
    constructor() {
        this.todoArray = [];
    }
    addToDo(todo) {
        this.todoArray.push(todo);
    }
}