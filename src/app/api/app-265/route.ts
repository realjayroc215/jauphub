export async function GET() {
  return Response.json({
    app: 265,
    status: "online",
    agent: "active"
  });
}
