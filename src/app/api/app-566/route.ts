export async function GET() {
  return Response.json({
    app: 566,
    status: "online",
    agent: "active"
  });
}
