export async function GET() {
  return Response.json({
    app: 660,
    status: "online",
    agent: "active"
  });
}
