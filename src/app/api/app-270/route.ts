export async function GET() {
  return Response.json({
    app: 270,
    status: "online",
    agent: "active"
  });
}
