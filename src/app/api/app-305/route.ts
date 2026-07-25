export async function GET() {
  return Response.json({
    app: 305,
    status: "online",
    agent: "active"
  });
}
