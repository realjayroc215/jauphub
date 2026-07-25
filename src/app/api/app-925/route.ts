export async function GET() {
  return Response.json({
    app: 925,
    status: "online",
    agent: "active"
  });
}
