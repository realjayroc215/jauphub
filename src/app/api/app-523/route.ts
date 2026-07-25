export async function GET() {
  return Response.json({
    app: 523,
    status: "online",
    agent: "active"
  });
}
