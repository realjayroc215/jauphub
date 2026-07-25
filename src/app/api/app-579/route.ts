export async function GET() {
  return Response.json({
    app: 579,
    status: "online",
    agent: "active"
  });
}
