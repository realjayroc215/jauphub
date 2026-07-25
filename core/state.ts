export class JAUPState {
  state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch() {
    const count = (await this.state.storage.get('count')) || 0;
    await this.state.storage.put('count', count + 1);

    return new Response(JSON.stringify({ visits: count + 1 }));
  }
}
