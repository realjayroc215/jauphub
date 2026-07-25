export async function GET() {
  return Response.json({
    app: 163,
    status: "online",
    agent: "active"
  });
}
