export async function GET() {
  return Response.json({
    app: 440,
    status: "online",
    agent: "active"
  });
}
