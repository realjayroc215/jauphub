export async function GET() {
  return Response.json({
    app: 460,
    status: "online",
    agent: "active"
  });
}
