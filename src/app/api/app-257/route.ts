export async function GET() {
  return Response.json({
    app: 257,
    status: "online",
    agent: "active"
  });
}
