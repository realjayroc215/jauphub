export async function GET() {
  return Response.json({
    app: 104,
    status: "online",
    agent: "active"
  });
}
