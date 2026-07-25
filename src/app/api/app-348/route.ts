export async function GET() {
  return Response.json({
    app: 348,
    status: "online",
    agent: "active"
  });
}
