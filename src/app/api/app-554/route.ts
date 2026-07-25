export async function GET() {
  return Response.json({
    app: 554,
    status: "online",
    agent: "active"
  });
}
