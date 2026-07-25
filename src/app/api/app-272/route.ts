export async function GET() {
  return Response.json({
    app: 272,
    status: "online",
    agent: "active"
  });
}
