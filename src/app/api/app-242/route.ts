export async function GET() {
  return Response.json({
    app: 242,
    status: "online",
    agent: "active"
  });
}
