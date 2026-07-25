export async function GET() {
  return Response.json({
    app: 878,
    status: "online",
    agent: "active"
  });
}
