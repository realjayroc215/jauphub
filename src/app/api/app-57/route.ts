export async function GET() {
  return Response.json({
    app: 57,
    status: "online",
    agent: "active"
  });
}
