export class JAUPCoreV4 {
  static modules: Record<string, Function> = {};
  static events: Array<{ module: string; payload: any; result: any; time: number }> = [];

  static register(name: string, handler: Function) {
    this.modules[name] = handler;
  }

  static async run(name: string, payload: any) {
    if (!this.modules[name]) {
      return { error: 'Module not found' };
    }

    const result = await this.modules[name](payload);

    this.events.push({
      module: name,
      payload,
      result,
      time: Date.now(),
    });

    return { module: name, result };
  }

  static async chain(sequence: string[], payload: any) {
    let output = payload;

    for (const module of sequence) {
      output = await this.run(module, output);
    }

    return output;
  }

  static getEvents() {
    return this.events.slice(-50);
  }
}
