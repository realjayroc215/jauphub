export async function GET() {
  return Response.json({
    app: 785,
    status: "online",
    agent: "active"
  });
}
