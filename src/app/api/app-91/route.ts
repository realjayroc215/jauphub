export async function GET() {
  return Response.json({
    app: 91,
    status: "online",
    agent: "active"
  });
}
