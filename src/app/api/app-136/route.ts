export async function GET() {
  return Response.json({
    app: 136,
    status: "online",
    agent: "active"
  });
}
