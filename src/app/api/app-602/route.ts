export async function GET() {
  return Response.json({
    app: 602,
    status: "online",
    agent: "active"
  });
}
