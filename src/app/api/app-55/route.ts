export async function GET() {
  return Response.json({
    app: 55,
    status: "online",
    agent: "active"
  });
}
