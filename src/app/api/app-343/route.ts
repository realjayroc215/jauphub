export async function GET() {
  return Response.json({
    app: 343,
    status: "online",
    agent: "active"
  });
}
