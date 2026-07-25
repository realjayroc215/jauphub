export async function GET() {
  return Response.json({
    app: 308,
    status: "online",
    agent: "active"
  });
}
