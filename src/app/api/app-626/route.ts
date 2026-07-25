export async function GET() {
  return Response.json({
    app: 626,
    status: "online",
    agent: "active"
  });
}
