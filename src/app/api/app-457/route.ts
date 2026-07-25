export async function GET() {
  return Response.json({
    app: 457,
    status: "online",
    agent: "active"
  });
}
