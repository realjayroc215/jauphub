export async function GET() {
  return Response.json({
    app: 107,
    status: "online",
    agent: "active"
  });
}
