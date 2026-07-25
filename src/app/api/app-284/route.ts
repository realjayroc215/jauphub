export async function GET() {
  return Response.json({
    app: 284,
    status: "online",
    agent: "active"
  });
}
