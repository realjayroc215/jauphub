export async function GET() {
  return Response.json({
    app: 647,
    status: "online",
    agent: "active"
  });
}
