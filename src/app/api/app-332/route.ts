export async function GET() {
  return Response.json({
    app: 332,
    status: "online",
    agent: "active"
  });
}
