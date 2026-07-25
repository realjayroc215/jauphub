export async function GET() {
  return Response.json({
    app: 918,
    status: "online",
    agent: "active"
  });
}
