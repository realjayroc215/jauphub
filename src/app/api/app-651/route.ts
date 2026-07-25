export async function GET() {
  return Response.json({
    app: 651,
    status: "online",
    agent: "active"
  });
}
