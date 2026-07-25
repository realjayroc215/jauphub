export async function GET() {
  return Response.json({
    app: 725,
    status: "online",
    agent: "active"
  });
}
