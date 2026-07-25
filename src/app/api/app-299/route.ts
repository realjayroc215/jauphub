export async function GET() {
  return Response.json({
    app: 299,
    status: "online",
    agent: "active"
  });
}
