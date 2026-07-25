export class JAUPCoreV3 {
  static modules: Record<string, Function> = {};
  static events: Array<{ event: string; payload: any; time: number }> = [];

  static register(name: string, handler: Function) {
    this.modules[name] = handler;
  }

  static emit(event: string, payload: any) {
    this.events.push({ event, payload, time: Date.now() });
  }

  static run(name: string, payload: any) {
    if (!this.modules[name]) {
      return { error: 'Module not found' };
    }

    const result = this.modules[name](payload);
    this.emit(name, payload);

    return { module: name, result };
  }

  static getEvents() {
    return this.events.slice(-20);
  }
}
