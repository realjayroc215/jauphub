export async function GET() {
  return Response.json({
    app: 374,
    status: "online",
    agent: "active"
  });
}
