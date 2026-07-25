export async function GET() {
  return Response.json({
    app: 539,
    status: "online",
    agent: "active"
  });
}
