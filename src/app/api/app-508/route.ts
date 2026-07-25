export async function GET() {
  return Response.json({
    app: 508,
    status: "online",
    agent: "active"
  });
}
