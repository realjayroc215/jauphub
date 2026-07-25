export async function GET() {
  return Response.json({
    app: 286,
    status: "online",
    agent: "active"
  });
}
