export async function GET() {
  return Response.json({
    app: 164,
    status: "online",
    agent: "active"
  });
}
