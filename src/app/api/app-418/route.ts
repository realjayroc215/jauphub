export async function GET() {
  return Response.json({
    app: 418,
    status: "online",
    agent: "active"
  });
}
