export async function GET() {
  return Response.json({
    app: 97,
    status: "online",
    agent: "active"
  });
}
