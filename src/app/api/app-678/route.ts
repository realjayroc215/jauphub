export async function GET() {
  return Response.json({
    app: 678,
    status: "online",
    agent: "active"
  });
}
