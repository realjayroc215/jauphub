export async function GET() {
  return Response.json({
    app: 296,
    status: "online",
    agent: "active"
  });
}
