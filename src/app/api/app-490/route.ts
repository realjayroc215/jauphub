export async function GET() {
  return Response.json({
    app: 490,
    status: "online",
    agent: "active"
  });
}
