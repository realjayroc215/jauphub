export async function GET() {
  return Response.json({
    app: 540,
    status: "online",
    agent: "active"
  });
}
