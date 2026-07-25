export async function GET() {
  return Response.json({
    app: 148,
    status: "online",
    agent: "active"
  });
}
