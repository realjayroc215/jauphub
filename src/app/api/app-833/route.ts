export async function GET() {
  return Response.json({
    app: 833,
    status: "online",
    agent: "active"
  });
}
