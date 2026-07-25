export async function GET() {
  return Response.json({
    app: 558,
    status: "online",
    agent: "active"
  });
}
