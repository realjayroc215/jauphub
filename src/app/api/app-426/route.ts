export async function GET() {
  return Response.json({
    app: 426,
    status: "online",
    agent: "active"
  });
}
