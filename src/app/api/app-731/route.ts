export async function GET() {
  return Response.json({
    app: 731,
    status: "online",
    agent: "active"
  });
}
