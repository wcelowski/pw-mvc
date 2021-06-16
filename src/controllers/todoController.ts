import TodoView from "../views/todoView";
import TodoListModel from "../models/todoListModel";
import {inMemoryToDoRepository} from "../repositories/inMemoryTodoRepository";

export default class TodoController {
    private view: TodoView;
    private model: TodoListModel;

    private async init()
    {
        this.view = new TodoView();
        this.model = await inMemoryToDoRepository.find()

        this.view.addItemEvent.addListener((arg: any) => {
            this.model.addItem(arg);
            this.view.render(this.model);
        })
    }

    public async run()
    {
        await this.init();
        this.view.render(this.model);
    }
}