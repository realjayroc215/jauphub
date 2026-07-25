export async function GET() {
  return Response.json({
    app: 808,
    status: "online",
    agent: "active"
  });
}
