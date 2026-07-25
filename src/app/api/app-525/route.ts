export async function GET() {
  return Response.json({
    app: 525,
    status: "online",
    agent: "active"
  });
}
