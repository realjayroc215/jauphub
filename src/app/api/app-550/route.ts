export async function GET() {
  return Response.json({
    app: 550,
    status: "online",
    agent: "active"
  });
}
