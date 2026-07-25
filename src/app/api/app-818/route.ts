export async function GET() {
  return Response.json({
    app: 818,
    status: "online",
    agent: "active"
  });
}
