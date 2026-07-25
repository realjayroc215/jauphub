export async function GET() {
  return Response.json({
    app: 681,
    status: "online",
    agent: "active"
  });
}
