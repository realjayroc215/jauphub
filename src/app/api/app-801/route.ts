export async function GET() {
  return Response.json({
    app: 801,
    status: "online",
    agent: "active"
  });
}
