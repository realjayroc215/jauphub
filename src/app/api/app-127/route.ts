export async function GET() {
  return Response.json({
    app: 127,
    status: "online",
    agent: "active"
  });
}
