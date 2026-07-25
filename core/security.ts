export class SecurityFeed {
  events: Array<{ event: string; time: string }> = [];

  log(event: string) {
    this.events.push({
      event,
      time: new Date().toISOString(),
    });
  }

  getEvents() {
    return this.events.slice(-10);
  }
}
