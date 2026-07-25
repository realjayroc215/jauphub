export async function GET() {
  return Response.json({
    app: 174,
    status: "online",
    agent: "active"
  });
}
