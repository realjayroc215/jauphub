export async function GET() {
  return Response.json({
    app: 522,
    status: "online",
    agent: "active"
  });
}
