export async function GET() {
  return Response.json({
    app: 297,
    status: "online",
    agent: "active"
  });
}
