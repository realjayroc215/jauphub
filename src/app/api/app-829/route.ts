export async function GET() {
  return Response.json({
    app: 829,
    status: "online",
    agent: "active"
  });
}
