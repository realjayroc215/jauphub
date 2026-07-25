export async function GET() {
  return Response.json({
    app: 677,
    status: "online",
    agent: "active"
  });
}
