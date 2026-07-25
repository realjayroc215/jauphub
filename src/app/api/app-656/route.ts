export async function GET() {
  return Response.json({
    app: 656,
    status: "online",
    agent: "active"
  });
}
