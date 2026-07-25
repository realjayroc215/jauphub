export async function GET() {
  return Response.json({
    app: 278,
    status: "online",
    agent: "active"
  });
}
