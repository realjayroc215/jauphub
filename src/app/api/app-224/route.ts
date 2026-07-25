export async function GET() {
  return Response.json({
    app: 224,
    status: "online",
    agent: "active"
  });
}
