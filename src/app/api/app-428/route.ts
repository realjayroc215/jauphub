export async function GET() {
  return Response.json({
    app: 428,
    status: "online",
    agent: "active"
  });
}
