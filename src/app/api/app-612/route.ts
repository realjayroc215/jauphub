export async function GET() {
  return Response.json({
    app: 612,
    status: "online",
    agent: "active"
  });
}
