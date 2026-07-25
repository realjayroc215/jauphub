export async function GET() {
  return Response.json({
    app: 666,
    status: "online",
    agent: "active"
  });
}
