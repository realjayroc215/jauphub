export async function GET() {
  return Response.json({
    app: 21,
    status: "online",
    agent: "active"
  });
}
