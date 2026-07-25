export async function GET() {
  return Response.json({
    app: 283,
    status: "online",
    agent: "active"
  });
}
