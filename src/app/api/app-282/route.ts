export async function GET() {
  return Response.json({
    app: 282,
    status: "online",
    agent: "active"
  });
}
