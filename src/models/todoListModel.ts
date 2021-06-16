import Event from "../infrastructure/event";

export default class TodoListModel {
    private readonly todoItems: string[] = [];
    public addItemEvent: Event;

    public constructor(todoItems: string[] = [])
    {
        this.todoItems = todoItems;
        this.addItemEvent = new Event();
    }

    public getItems(): string[]
    {
        return this.todoItems;
    }

    public addItem(todoItem: string)
    {
        this.todoItems.push(todoItem)
    }
}