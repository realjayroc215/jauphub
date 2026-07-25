export async function GET() {
  return Response.json({
    app: 141,
    status: "online",
    agent: "active"
  });
}
