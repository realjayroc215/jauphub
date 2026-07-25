export async function GET() {
  return Response.json({
    app: 116,
    status: "online",
    agent: "active"
  });
}
