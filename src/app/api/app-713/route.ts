export async function GET() {
  return Response.json({
    app: 713,
    status: "online",
    agent: "active"
  });
}
