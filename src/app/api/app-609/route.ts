export async function GET() {
  return Response.json({
    app: 609,
    status: "online",
    agent: "active"
  });
}
