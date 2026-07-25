export async function GET() {
  return Response.json({
    app: 613,
    status: "online",
    agent: "active"
  });
}
