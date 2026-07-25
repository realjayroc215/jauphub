export async function GET() {
  return Response.json({
    app: 760,
    status: "online",
    agent: "active"
  });
}
