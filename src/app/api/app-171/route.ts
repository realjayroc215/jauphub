export async function GET() {
  return Response.json({
    app: 171,
    status: "online",
    agent: "active"
  });
}
