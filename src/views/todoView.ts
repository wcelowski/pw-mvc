import Event from "../infrastructure/event";
import TodoListModel from "../models/todoListModel";

export default class TodoView {
    public addItemEvent: Event;

    public constructor() {
        this.addItemEvent = new Event();
    }

    public render(model: TodoListModel)
    {
        const html = document.createRange().createContextualFragment(
        '<div id="todo-view">' +
            '        <div id="todo-list-items">' +
            '             <ul class="list-group py-5">' +
                            model.getItems().map(item => `<li class="list-group-item">${item}</li>`).join('') +
            '              </ul>' +
            '        </div>' +
            '        <div class="input-group">' +
            '            <label for="new-item" class="px-2 pt-1 form-label">' +
            '                New item' +
            '            </label>' +
            '            <input class="form-control d-inline-block" type="text" id="new-item-input">' +
            '            <button type="button" class="btn btn-primary" id="add-item">Add Item</button>' +
            '         </div>'+
            '    </div>');

        html.getElementById("add-item").addEventListener(
            'click',
            () => this.addItemEvent.trigger(
                        (document.getElementById('new-item-input') as HTMLInputElement).value,
                    ),
            false
        )

        document.body.replaceChild(html, document.body.firstChild);
    }
}