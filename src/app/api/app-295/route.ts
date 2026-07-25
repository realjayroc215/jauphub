export async function GET() {
  return Response.json({
    app: 295,
    status: "online",
    agent: "active"
  });
}
