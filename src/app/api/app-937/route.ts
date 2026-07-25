export async function GET() {
  return Response.json({
    app: 937,
    status: "online",
    agent: "active"
  });
}
