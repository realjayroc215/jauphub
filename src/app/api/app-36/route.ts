export async function GET() {
  return Response.json({
    app: 36,
    status: "online",
    agent: "active"
  });
}
