export async function GET() {
  return Response.json({
    app: 329,
    status: "online",
    agent: "active"
  });
}
