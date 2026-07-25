export async function GET() {
  return Response.json({
    app: 627,
    status: "online",
    agent: "active"
  });
}
