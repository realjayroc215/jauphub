export async function GET() {
  return Response.json({
    app: 424,
    status: "online",
    agent: "active"
  });
}
