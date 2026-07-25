export async function GET() {
  return Response.json({
    app: 339,
    status: "online",
    agent: "active"
  });
}
