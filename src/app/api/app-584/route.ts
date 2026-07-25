export async function GET() {
  return Response.json({
    app: 584,
    status: "online",
    agent: "active"
  });
}
