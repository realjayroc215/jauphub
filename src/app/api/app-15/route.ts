export async function GET() {
  return Response.json({
    app: 15,
    status: "online",
    agent: "active"
  });
}
