export async function GET() {
  return Response.json({
    app: 753,
    status: "online",
    agent: "active"
  });
}
