import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import eventHandlerInterface from "./event-handler.interface";
import eventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): {
    [eventName: string]: EventHandlerInterface[];
  } {
    return this.eventHandlers;
  }

  notify(event: eventInterface): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((handler) => {
        handler.handle(event);
      });
    }
  }

  register(
    eventName: string,
    handler: eventHandlerInterface<eventInterface>
  ): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(handler);
  }

  unregister(
    eventName: string,
    handler: eventHandlerInterface<eventInterface>
  ): void {
    if (this.eventHandlers[eventName]) {
      const index = this.eventHandlers[eventName].indexOf(handler);
      if (index !== -1) {
        this.eventHandlers[eventName].splice(index, 1);
      }
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }
}
