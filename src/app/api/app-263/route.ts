export async function GET() {
  return Response.json({
    app: 263,
    status: "online",
    agent: "active"
  });
}
