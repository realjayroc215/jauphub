export async function GET() {
  return Response.json({
    app: 606,
    status: "online",
    agent: "active"
  });
}
