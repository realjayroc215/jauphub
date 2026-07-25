export async function GET() {
  return Response.json({
    app: 518,
    status: "online",
    agent: "active"
  });
}
