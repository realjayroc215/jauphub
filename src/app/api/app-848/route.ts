export async function GET() {
  return Response.json({
    app: 848,
    status: "online",
    agent: "active"
  });
}
