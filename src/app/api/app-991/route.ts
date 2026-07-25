export async function GET() {
  return Response.json({
    app: 991,
    status: "online",
    agent: "active"
  });
}
