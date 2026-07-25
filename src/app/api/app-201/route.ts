export async function GET() {
  return Response.json({
    app: 201,
    status: "online",
    agent: "active"
  });
}
