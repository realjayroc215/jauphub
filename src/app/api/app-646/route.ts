export async function GET() {
  return Response.json({
    app: 646,
    status: "online",
    agent: "active"
  });
}
