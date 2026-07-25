export async function GET() {
  return Response.json({
    app: 410,
    status: "online",
    agent: "active"
  });
}
