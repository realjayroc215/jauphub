export async function GET() {
  return Response.json({
    app: 687,
    status: "online",
    agent: "active"
  });
}
