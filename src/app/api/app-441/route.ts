export async function GET() {
  return Response.json({
    app: 441,
    status: "online",
    agent: "active"
  });
}
