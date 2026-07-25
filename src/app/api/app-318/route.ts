export async function GET() {
  return Response.json({
    app: 318,
    status: "online",
    agent: "active"
  });
}
