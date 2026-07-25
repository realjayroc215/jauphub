export async function GET() {
  return Response.json({
    app: 916,
    status: "online",
    agent: "active"
  });
}
