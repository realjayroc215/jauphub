export async function GET() {
  return Response.json({
    app: 396,
    status: "online",
    agent: "active"
  });
}
