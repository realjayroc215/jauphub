export async function GET() {
  return Response.json({
    app: 373,
    status: "online",
    agent: "active"
  });
}
