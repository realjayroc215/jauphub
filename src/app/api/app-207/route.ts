export async function GET() {
  return Response.json({
    app: 207,
    status: "online",
    agent: "active"
  });
}
