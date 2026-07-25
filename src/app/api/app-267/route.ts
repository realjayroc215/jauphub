export async function GET() {
  return Response.json({
    app: 267,
    status: "online",
    agent: "active"
  });
}
