export async function GET() {
  return Response.json({
    app: 755,
    status: "online",
    agent: "active"
  });
}
