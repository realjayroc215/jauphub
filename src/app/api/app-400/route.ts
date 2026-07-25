export async function GET() {
  return Response.json({
    app: 400,
    status: "online",
    agent: "active"
  });
}
