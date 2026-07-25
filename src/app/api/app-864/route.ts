export async function GET() {
  return Response.json({
    app: 864,
    status: "online",
    agent: "active"
  });
}
