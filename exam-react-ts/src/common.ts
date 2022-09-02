type Handler = (params?: any) => any;
export enum Page {
  PREV = "PREV",
  NEXT = "NEXT"
}
export class PubSub {
  private eventMap: Record<string, Handler[]>;

  constructor() {
    this.eventMap = {};
  }
  // 订阅方法
  on(key: string, handler: Handler) {
    if (!this.eventMap[key]) {
      this.eventMap[key] = [];
    }
    this.eventMap[key].push(handler);
  }
  // 发布方法
  emit(key: string, params?: any) {
    if (this.eventMap[key]) {
      this.eventMap[key].forEach((handler: Handler) => {
        handler(params);
      });
    }
  }
  //销毁方法
  remove(key: string, handler: Handler) {
    if (this.eventMap[key]) {
      const res = this.eventMap[key].indexOf(handler);
      res !== -1 && this.evemtMap[key].splice(res, 1);
    }
  }
}

const defaultEvent = new PubSub();

export default defaultEvent;
