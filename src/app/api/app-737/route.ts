export async function GET() {
  return Response.json({
    app: 737,
    status: "online",
    agent: "active"
  });
}
