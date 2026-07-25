export async function GET() {
  return Response.json({
    app: 178,
    status: "online",
    agent: "active"
  });
}
