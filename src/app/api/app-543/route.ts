export async function GET() {
  return Response.json({
    app: 543,
    status: "online",
    agent: "active"
  });
}
