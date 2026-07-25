export async function GET() {
  return Response.json({
    app: 575,
    status: "online",
    agent: "active"
  });
}
