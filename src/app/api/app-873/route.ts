export async function GET() {
  return Response.json({
    app: 873,
    status: "online",
    agent: "active"
  });
}
