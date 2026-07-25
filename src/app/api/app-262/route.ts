export async function GET() {
  return Response.json({
    app: 262,
    status: "online",
    agent: "active"
  });
}
