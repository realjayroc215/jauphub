export async function GET() {
  return Response.json({
    app: 77,
    status: "online",
    agent: "active"
  });
}
