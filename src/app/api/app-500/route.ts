export async function GET() {
  return Response.json({
    app: 500,
    status: "online",
    agent: "active"
  });
}
