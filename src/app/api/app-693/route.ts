export async function GET() {
  return Response.json({
    app: 693,
    status: "online",
    agent: "active"
  });
}
