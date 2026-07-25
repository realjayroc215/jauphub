export async function GET() {
  return Response.json({
    app: 407,
    status: "online",
    agent: "active"
  });
}
