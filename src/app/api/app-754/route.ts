export async function GET() {
  return Response.json({
    app: 754,
    status: "online",
    agent: "active"
  });
}
