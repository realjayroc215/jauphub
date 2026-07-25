export async function GET() {
  return Response.json({
    app: 843,
    status: "online",
    agent: "active"
  });
}
