export async function GET() {
  return Response.json({
    app: 76,
    status: "online",
    agent: "active"
  });
}
