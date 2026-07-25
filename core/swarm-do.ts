import { DurableObjectState } from "@cloudflare/workers-types";

export class SwarmDO {
  constructor(private state: DurableObjectState, private env: any) {}

  async fetch(request: Request): Promise<Response> {
    const agentCount = await this.state.storage.get("agentCount") || 4;

    return new Response(JSON.stringify({
      swarm: "online",
      agents: agentCount,
      status: "ready"
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
