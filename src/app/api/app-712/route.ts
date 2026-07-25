export async function GET() {
  return Response.json({
    app: 712,
    status: "online",
    agent: "active"
  });
}
