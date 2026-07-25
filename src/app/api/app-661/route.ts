export async function GET() {
  return Response.json({
    app: 661,
    status: "online",
    agent: "active"
  });
}
