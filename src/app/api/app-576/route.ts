export async function GET() {
  return Response.json({
    app: 576,
    status: "online",
    agent: "active"
  });
}
