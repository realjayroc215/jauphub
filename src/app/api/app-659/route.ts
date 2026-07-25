export async function GET() {
  return Response.json({
    app: 659,
    status: "online",
    agent: "active"
  });
}
