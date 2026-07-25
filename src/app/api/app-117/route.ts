export async function GET() {
  return Response.json({
    app: 117,
    status: "online",
    agent: "active"
  });
}
