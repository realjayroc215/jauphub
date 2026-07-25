export async function GET() {
  return Response.json({
    app: 512,
    status: "online",
    agent: "active"
  });
}
