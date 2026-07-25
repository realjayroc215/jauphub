export async function GET() {
  return Response.json({
    app: 752,
    status: "online",
    agent: "active"
  });
}
