export async function GET() {
  return Response.json({
    app: 863,
    status: "online",
    agent: "active"
  });
}
