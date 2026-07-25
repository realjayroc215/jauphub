export async function GET() {
  return Response.json({
    app: 464,
    status: "online",
    agent: "active"
  });
}
