export async function GET() {
  return Response.json({
    app: 9,
    status: "online",
    agent: "active"
  });
}
