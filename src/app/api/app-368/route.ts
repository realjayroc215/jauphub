export async function GET() {
  return Response.json({
    app: 368,
    status: "online",
    agent: "active"
  });
}
