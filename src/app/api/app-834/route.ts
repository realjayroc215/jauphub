export async function GET() {
  return Response.json({
    app: 834,
    status: "online",
    agent: "active"
  });
}
