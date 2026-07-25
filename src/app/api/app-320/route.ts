export async function GET() {
  return Response.json({
    app: 320,
    status: "online",
    agent: "active"
  });
}
