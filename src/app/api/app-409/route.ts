export async function GET() {
  return Response.json({
    app: 409,
    status: "online",
    agent: "active"
  });
}
