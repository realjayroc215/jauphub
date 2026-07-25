export async function GET() {
  return Response.json({
    app: 545,
    status: "online",
    agent: "active"
  });
}
