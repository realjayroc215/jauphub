export async function GET() {
  return Response.json({
    app: 236,
    status: "online",
    agent: "active"
  });
}
