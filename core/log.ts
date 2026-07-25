export class JAUPLog {
  static logs: Array<{ module: string; message: string; time: string }> = [];

  static write(module: string, message: string) {
    const entry = {
      module,
      message,
      time: new Date().toISOString(),
    };

    this.logs.push(entry);
    return entry;
  }

  static recent() {
    return this.logs.slice(-50);
  }
}
