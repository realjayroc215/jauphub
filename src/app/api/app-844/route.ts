export async function GET() {
  return Response.json({
    app: 844,
    status: "online",
    agent: "active"
  });
}
