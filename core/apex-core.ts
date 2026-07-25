import { JROC_THEME } from "@design/theme";

export async function ApexCore(prompt: string) {
  // Apex sees the entire OS state
  const state = {
    swarm: await fetch("/api/swarm").then(r => r.json()),
    agents: await fetch("/api/agents").then(r => r.json()),
    drive: await fetch("/api/drive").then(r => r.json()),
    security: await fetch("/api/security").then(r => r.json())
  };

  // Send prompt + OS state to your LLM backend
  const response = await fetch("/api/llm", {
    method: "POST",
    body: JSON.stringify({ prompt, state })
  }).then(r => r.json());

  return response.output;
}
