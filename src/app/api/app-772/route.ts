export async function GET() {
  return Response.json({
    app: 772,
    status: "online",
    agent: "active"
  });
}
