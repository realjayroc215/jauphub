export async function GET() {
  return Response.json({
    app: 648,
    status: "online",
    agent: "active"
  });
}
