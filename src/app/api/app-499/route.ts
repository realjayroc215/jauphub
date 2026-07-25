export async function GET() {
  return Response.json({
    app: 499,
    status: "online",
    agent: "active"
  });
}
