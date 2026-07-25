export async function GET() {
  return Response.json({
    app: 478,
    status: "online",
    agent: "active"
  });
}
