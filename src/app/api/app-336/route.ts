export async function GET() {
  return Response.json({
    app: 336,
    status: "online",
    agent: "active"
  });
}
