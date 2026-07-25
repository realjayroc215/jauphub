export async function GET() {
  return Response.json({
    app: 825,
    status: "online",
    agent: "active"
  });
}
