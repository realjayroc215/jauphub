export async function GET() {
  return Response.json({
    app: 908,
    status: "online",
    agent: "active"
  });
}
