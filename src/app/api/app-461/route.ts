export async function GET() {
  return Response.json({
    app: 461,
    status: "online",
    agent: "active"
  });
}
