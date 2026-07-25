export async function GET() {
  return Response.json({
    app: 79,
    status: "online",
    agent: "active"
  });
}
