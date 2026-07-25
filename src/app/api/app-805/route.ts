export async function GET() {
  return Response.json({
    app: 805,
    status: "online",
    agent: "active"
  });
}
