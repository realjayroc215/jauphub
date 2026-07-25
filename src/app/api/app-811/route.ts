export async function GET() {
  return Response.json({
    app: 811,
    status: "online",
    agent: "active"
  });
}
