export async function GET() {
  return Response.json({
    app: 669,
    status: "online",
    agent: "active"
  });
}
