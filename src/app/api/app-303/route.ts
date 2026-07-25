export async function GET() {
  return Response.json({
    app: 303,
    status: "online",
    agent: "active"
  });
}
