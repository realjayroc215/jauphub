export async function GET() {
  return Response.json({
    app: 671,
    status: "online",
    agent: "active"
  });
}
