export async function GET() {
  return Response.json({
    app: 756,
    status: "online",
    agent: "active"
  });
}
