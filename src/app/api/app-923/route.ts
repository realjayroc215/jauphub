export async function GET() {
  return Response.json({
    app: 923,
    status: "online",
    agent: "active"
  });
}
