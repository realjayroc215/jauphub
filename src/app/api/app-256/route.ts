export async function GET() {
  return Response.json({
    app: 256,
    status: "online",
    agent: "active"
  });
}
