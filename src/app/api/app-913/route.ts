export async function GET() {
  return Response.json({
    app: 913,
    status: "online",
    agent: "active"
  });
}
