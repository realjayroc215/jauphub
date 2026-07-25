export async function GET() {
  return Response.json({
    app: 243,
    status: "online",
    agent: "active"
  });
}
