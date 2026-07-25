export async function GET() {
  return Response.json({
    app: 237,
    status: "online",
    agent: "active"
  });
}
