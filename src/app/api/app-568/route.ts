export async function GET() {
  return Response.json({
    app: 568,
    status: "online",
    agent: "active"
  });
}
