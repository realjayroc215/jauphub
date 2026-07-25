export async function GET() {
  return Response.json({
    app: 111,
    status: "online",
    agent: "active"
  });
}
