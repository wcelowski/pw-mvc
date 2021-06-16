export default class Event {

    private listeners: Function[]

    constructor() {
        this.listeners = [];
    }

    addListener(listener: Function) {
        this.listeners.push(listener);
    }

    trigger(params: any) {
        this.listeners.forEach(listener => { listener(params); });
    }
}