export class ToDoList {
    constructor() {
        this.todoArray = [];
    }
    addToDo(todo) {
        this.todoArray.push(todo);
    }
    renderToDo() {
        let content = "";
        content = this.todoArray.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textTodo}</span>
                    <div class="buttons">
                        <button class="remove">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                            <i class="fa fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
            return tdContent;
        }, ''); // khai báo giá trị ban đầu cho tdContent

        return content;
    }
}