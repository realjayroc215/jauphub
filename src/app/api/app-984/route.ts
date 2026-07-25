export async function GET() {
  return Response.json({
    app: 984,
    status: "online",
    agent: "active"
  });
}
