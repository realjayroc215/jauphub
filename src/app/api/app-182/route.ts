export async function GET() {
  return Response.json({
    app: 182,
    status: "online",
    agent: "active"
  });
}
