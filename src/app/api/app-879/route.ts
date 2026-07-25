export async function GET() {
  return Response.json({
    app: 879,
    status: "online",
    agent: "active"
  });
}
