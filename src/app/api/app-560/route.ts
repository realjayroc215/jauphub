export async function GET() {
  return Response.json({
    app: 560,
    status: "online",
    agent: "active"
  });
}
