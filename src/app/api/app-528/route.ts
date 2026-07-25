export async function GET() {
  return Response.json({
    app: 528,
    status: "online",
    agent: "active"
  });
}
