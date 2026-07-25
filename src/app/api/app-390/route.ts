export async function GET() {
  return Response.json({
    app: 390,
    status: "online",
    agent: "active"
  });
}
