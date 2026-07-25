export async function GET() {
  return Response.json({
    app: 877,
    status: "online",
    agent: "active"
  });
}
