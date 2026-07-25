export async function GET() {
  return Response.json({
    app: 636,
    status: "online",
    agent: "active"
  });
}
