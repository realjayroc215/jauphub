export async function GET() {
  return Response.json({
    app: 301,
    status: "online",
    agent: "active"
  });
}
