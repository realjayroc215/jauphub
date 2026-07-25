export async function GET() {
  return Response.json({
    app: 762,
    status: "online",
    agent: "active"
  });
}
