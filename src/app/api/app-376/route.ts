export async function GET() {
  return Response.json({
    app: 376,
    status: "online",
    agent: "active"
  });
}
