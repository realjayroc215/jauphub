export async function GET() {
  return Response.json({
    app: 313,
    status: "online",
    agent: "active"
  });
}
