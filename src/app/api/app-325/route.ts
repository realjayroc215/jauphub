export async function GET() {
  return Response.json({
    app: 325,
    status: "online",
    agent: "active"
  });
}
