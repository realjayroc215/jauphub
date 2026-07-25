export async function GET() {
  return Response.json({
    app: 471,
    status: "online",
    agent: "active"
  });
}
