export async function GET() {
  return Response.json({
    app: 370,
    status: "online",
    agent: "active"
  });
}
