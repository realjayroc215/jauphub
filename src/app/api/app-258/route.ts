export async function GET() {
  return Response.json({
    app: 258,
    status: "online",
    agent: "active"
  });
}
