export async function GET() {
  return Response.json({
    app: 729,
    status: "online",
    agent: "active"
  });
}
