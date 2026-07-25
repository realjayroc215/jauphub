export async function GET() {
  return Response.json({
    app: 865,
    status: "online",
    agent: "active"
  });
}
