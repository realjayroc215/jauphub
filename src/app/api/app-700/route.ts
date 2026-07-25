export async function GET() {
  return Response.json({
    app: 700,
    status: "online",
    agent: "active"
  });
}
