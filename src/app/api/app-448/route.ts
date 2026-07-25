export async function GET() {
  return Response.json({
    app: 448,
    status: "online",
    agent: "active"
  });
}
