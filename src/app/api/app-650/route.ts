export async function GET() {
  return Response.json({
    app: 650,
    status: "online",
    agent: "active"
  });
}
