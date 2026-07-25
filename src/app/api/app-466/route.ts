export async function GET() {
  return Response.json({
    app: 466,
    status: "online",
    agent: "active"
  });
}
