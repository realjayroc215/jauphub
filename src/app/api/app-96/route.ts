export async function GET() {
  return Response.json({
    app: 96,
    status: "online",
    agent: "active"
  });
}
