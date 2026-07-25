export async function GET() {
  return Response.json({
    app: 33,
    status: "online",
    agent: "active"
  });
}
