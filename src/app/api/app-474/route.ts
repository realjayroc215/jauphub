export async function GET() {
  return Response.json({
    app: 474,
    status: "online",
    agent: "active"
  });
}
