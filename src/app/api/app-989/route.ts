export async function GET() {
  return Response.json({
    app: 989,
    status: "online",
    agent: "active"
  });
}
