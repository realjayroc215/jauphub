export async function GET() {
  return Response.json({
    app: 628,
    status: "online",
    agent: "active"
  });
}
