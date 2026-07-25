export async function GET() {
  return Response.json({
    app: 692,
    status: "online",
    agent: "active"
  });
}
