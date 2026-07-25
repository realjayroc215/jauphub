export async function GET() {
  return Response.json({
    app: 592,
    status: "online",
    agent: "active"
  });
}
