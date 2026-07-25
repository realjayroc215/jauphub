export async function GET() {
  return Response.json({
    app: 17,
    status: "online",
    agent: "active"
  });
}
