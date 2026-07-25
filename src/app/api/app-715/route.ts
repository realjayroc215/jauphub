export async function GET() {
  return Response.json({
    app: 715,
    status: "online",
    agent: "active"
  });
}
