export async function GET() {
  return Response.json({
    app: 239,
    status: "online",
    agent: "active"
  });
}
