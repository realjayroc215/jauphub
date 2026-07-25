export async function GET() {
  return Response.json({
    app: 331,
    status: "online",
    agent: "active"
  });
}
