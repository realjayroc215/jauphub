export async function GET() {
  return Response.json({
    app: 98,
    status: "online",
    agent: "active"
  });
}
