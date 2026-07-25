export async function GET() {
  return Response.json({
    app: 476,
    status: "online",
    agent: "active"
  });
}
