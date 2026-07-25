export async function GET() {
  return Response.json({
    app: 639,
    status: "online",
    agent: "active"
  });
}
