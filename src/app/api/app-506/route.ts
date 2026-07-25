export async function GET() {
  return Response.json({
    app: 506,
    status: "online",
    agent: "active"
  });
}
