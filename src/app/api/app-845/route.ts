export async function GET() {
  return Response.json({
    app: 845,
    status: "online",
    agent: "active"
  });
}
