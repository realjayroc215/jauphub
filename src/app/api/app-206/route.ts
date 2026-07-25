export async function GET() {
  return Response.json({
    app: 206,
    status: "online",
    agent: "active"
  });
}
