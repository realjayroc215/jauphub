export async function GET() {
  return Response.json({
    app: 803,
    status: "online",
    agent: "active"
  });
}
