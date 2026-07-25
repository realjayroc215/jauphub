export async function GET() {
  return Response.json({
    app: 387,
    status: "online",
    agent: "active"
  });
}
