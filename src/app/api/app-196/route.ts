export async function GET() {
  return Response.json({
    app: 196,
    status: "online",
    agent: "active"
  });
}
