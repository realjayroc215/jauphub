export async function GET() {
  return Response.json({
    app: 444,
    status: "online",
    agent: "active"
  });
}
