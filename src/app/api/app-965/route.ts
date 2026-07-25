export async function GET() {
  return Response.json({
    app: 965,
    status: "online",
    agent: "active"
  });
}
