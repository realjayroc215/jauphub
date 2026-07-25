export async function GET() {
  return Response.json({
    app: 459,
    status: "online",
    agent: "active"
  });
}
