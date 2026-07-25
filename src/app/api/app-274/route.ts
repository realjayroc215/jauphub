export async function GET() {
  return Response.json({
    app: 274,
    status: "online",
    agent: "active"
  });
}
