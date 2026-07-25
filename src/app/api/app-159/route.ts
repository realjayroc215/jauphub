export async function GET() {
  return Response.json({
    app: 159,
    status: "online",
    agent: "active"
  });
}
