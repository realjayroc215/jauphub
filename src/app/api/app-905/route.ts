export async function GET() {
  return Response.json({
    app: 905,
    status: "online",
    agent: "active"
  });
}
