export async function GET() {
  return Response.json({
    app: 903,
    status: "online",
    agent: "active"
  });
}
