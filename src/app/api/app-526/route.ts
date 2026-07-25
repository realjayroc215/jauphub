export async function GET() {
  return Response.json({
    app: 526,
    status: "online",
    agent: "active"
  });
}
