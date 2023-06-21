// 定义订阅函数类型
export type Subscriber = (dom: Element) => void;

// 事件调度中心类
export class EventSubscriber {
    _eventHandlers: Map<string, Subscriber>;

    constructor() {
        this._eventHandlers = new Map<string, Subscriber>();
    }

    // 订阅事件
    addListener(eventName: string, handler: Subscriber) {
        this._eventHandlers.set(eventName, handler);
    }

    // 发布事件
    $emit(eventName: string, data: any) {
        let handler = this._eventHandlers.get(eventName);
        handler && handler(data);
    }

    // 订阅事件
    $on(eventName: string, eventHandler: Subscriber) {
        this.addListener(eventName, eventHandler);
    }
}

export const evn = new EventSubscriber();
