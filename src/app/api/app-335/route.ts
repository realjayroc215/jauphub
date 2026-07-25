export async function GET() {
  return Response.json({
    app: 335,
    status: "online",
    agent: "active"
  });
}
