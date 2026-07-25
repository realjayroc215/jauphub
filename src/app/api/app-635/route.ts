export async function GET() {
  return Response.json({
    app: 635,
    status: "online",
    agent: "active"
  });
}
