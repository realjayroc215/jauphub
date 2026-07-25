export async function GET() {
  return Response.json({
    app: 138,
    status: "online",
    agent: "active"
  });
}
