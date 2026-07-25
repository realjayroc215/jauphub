export async function GET() {
  return Response.json({
    app: 634,
    status: "online",
    agent: "active"
  });
}
