export async function GET() {
  return Response.json({
    app: 83,
    status: "online",
    agent: "active"
  });
}
