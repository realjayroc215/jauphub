export async function GET() {
  return Response.json({
    app: 458,
    status: "online",
    agent: "active"
  });
}
