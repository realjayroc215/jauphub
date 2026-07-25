export async function GET() {
  return Response.json({
    app: 187,
    status: "online",
    agent: "active"
  });
}
