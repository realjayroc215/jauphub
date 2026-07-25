export async function GET() {
  return Response.json({
    app: 949,
    status: "online",
    agent: "active"
  });
}
