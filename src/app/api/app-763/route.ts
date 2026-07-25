export async function GET() {
  return Response.json({
    app: 763,
    status: "online",
    agent: "active"
  });
}
