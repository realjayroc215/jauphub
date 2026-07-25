export async function GET() {
  return Response.json({
    app: 366,
    status: "online",
    agent: "active"
  });
}
