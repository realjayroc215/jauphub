export async function GET() {
  return Response.json({
    app: 170,
    status: "online",
    agent: "active"
  });
}
