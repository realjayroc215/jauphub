export async function GET() {
  return Response.json({
    app: 23,
    status: "online",
    agent: "active"
  });
}
