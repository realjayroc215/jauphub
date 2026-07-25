export async function GET() {
  return Response.json({
    app: 988,
    status: "online",
    agent: "active"
  });
}
