export async function GET() {
  return Response.json({
    app: 437,
    status: "online",
    agent: "active"
  });
}
