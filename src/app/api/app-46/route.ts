export async function GET() {
  return Response.json({
    app: 46,
    status: "online",
    agent: "active"
  });
}
