export async function GET() {
  return Response.json({
    app: 897,
    status: "online",
    agent: "active"
  });
}
