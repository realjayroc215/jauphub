export async function UpkeepAgent(app: string) {
  const status = await fetch("/api/" + app).then(r => r.json());

  if (status.status !== "online" && status.status !== "active") {
    await fetch("/api/" + app + "/restart", { method: "POST" });
  }

  return { app, status };
}
