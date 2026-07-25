export async function GET() {
  return Response.json({
    app: 722,
    status: "online",
    agent: "active"
  });
}
