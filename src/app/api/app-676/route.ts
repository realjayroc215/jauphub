export async function GET() {
  return Response.json({
    app: 676,
    status: "online",
    agent: "active"
  });
}
