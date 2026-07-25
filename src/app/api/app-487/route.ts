export async function GET() {
  return Response.json({
    app: 487,
    status: "online",
    agent: "active"
  });
}
