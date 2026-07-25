export async function GET() {
  return Response.json({
    app: 50,
    status: "online",
    agent: "active"
  });
}
