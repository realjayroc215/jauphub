export async function GET() {
  return Response.json({
    app: 211,
    status: "online",
    agent: "active"
  });
}
