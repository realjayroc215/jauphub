export async function GET() {
  return Response.json({
    app: 820,
    status: "online",
    agent: "active"
  });
}
