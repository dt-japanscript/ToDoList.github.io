export class ToDoList {
    constructor() {
        this.todoArray = [];
    }
    addToDo(todo) {
        this.todoArray.push(todo);
    }
    removeToDo(index) {
        this.todoArray.splice(index, 1);
    }
    renderToDo() {
        let content = "";
        content = this.todoArray.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textTodo}</span>
                    <div class="buttons">
                        <button class="remove" data-index="${index}" onclick="deleteToDo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>

                        <button class="complete" data-index="${index}" data-status="${item.status}" onclick="completeToDo(event)">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
            return tdContent;
        }, ''); // khai báo giá trị ban đầu cho tdContent

        return content;
    }
}