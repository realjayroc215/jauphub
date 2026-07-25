export async function GET() {
  return Response.json({
    app: 131,
    status: "online",
    agent: "active"
  });
}
