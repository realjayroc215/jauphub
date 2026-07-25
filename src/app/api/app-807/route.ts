export async function GET() {
  return Response.json({
    app: 807,
    status: "online",
    agent: "active"
  });
}
