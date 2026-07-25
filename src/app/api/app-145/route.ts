export async function GET() {
  return Response.json({
    app: 145,
    status: "online",
    agent: "active"
  });
}
