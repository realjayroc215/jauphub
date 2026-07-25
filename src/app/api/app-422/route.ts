export async function GET() {
  return Response.json({
    app: 422,
    status: "online",
    agent: "active"
  });
}
