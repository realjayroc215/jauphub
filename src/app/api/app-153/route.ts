export async function GET() {
  return Response.json({
    app: 153,
    status: "online",
    agent: "active"
  });
}
