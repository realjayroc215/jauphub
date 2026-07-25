export async function GET() {
  return Response.json({
    app: 451,
    status: "online",
    agent: "active"
  });
}
