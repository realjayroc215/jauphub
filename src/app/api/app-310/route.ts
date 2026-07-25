export async function GET() {
  return Response.json({
    app: 310,
    status: "online",
    agent: "active"
  });
}
