export async function GET() {
  return Response.json({
    app: 324,
    status: "online",
    agent: "active"
  });
}
