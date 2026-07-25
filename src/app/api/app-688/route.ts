export async function GET() {
  return Response.json({
    app: 688,
    status: "online",
    agent: "active"
  });
}
