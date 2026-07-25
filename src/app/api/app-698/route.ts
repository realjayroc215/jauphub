export async function GET() {
  return Response.json({
    app: 698,
    status: "online",
    agent: "active"
  });
}
