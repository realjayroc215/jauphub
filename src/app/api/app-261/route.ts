export async function GET() {
  return Response.json({
    app: 261,
    status: "online",
    agent: "active"
  });
}
