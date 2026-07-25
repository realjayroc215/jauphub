export async function GET() {
  return Response.json({
    app: 473,
    status: "online",
    agent: "active"
  });
}
