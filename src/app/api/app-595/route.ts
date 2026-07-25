export async function GET() {
  return Response.json({
    app: 595,
    status: "online",
    agent: "active"
  });
}
