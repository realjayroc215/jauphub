export async function GET() {
  return Response.json({
    app: 446,
    status: "online",
    agent: "active"
  });
}
