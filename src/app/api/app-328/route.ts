export async function GET() {
  return Response.json({
    app: 328,
    status: "online",
    agent: "active"
  });
}
