export async function GET() {
  return Response.json({
    app: 190,
    status: "online",
    agent: "active"
  });
}
