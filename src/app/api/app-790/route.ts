export async function GET() {
  return Response.json({
    app: 790,
    status: "online",
    agent: "active"
  });
}
