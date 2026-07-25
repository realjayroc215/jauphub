export async function GET() {
  return Response.json({
    app: 304,
    status: "online",
    agent: "active"
  });
}
