export async function GET() {
  return Response.json({
    app: 113,
    status: "online",
    agent: "active"
  });
}
