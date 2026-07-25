export async function GET() {
  return Response.json({
    app: 521,
    status: "online",
    agent: "active"
  });
}
