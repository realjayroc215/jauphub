export async function GET() {
  return Response.json({
    app: 792,
    status: "online",
    agent: "active"
  });
}
