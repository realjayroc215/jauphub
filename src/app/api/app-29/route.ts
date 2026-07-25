export async function GET() {
  return Response.json({
    app: 29,
    status: "online",
    agent: "active"
  });
}
