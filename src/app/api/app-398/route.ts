export async function GET() {
  return Response.json({
    app: 398,
    status: "online",
    agent: "active"
  });
}
