export async function GET() {
  return Response.json({
    app: 450,
    status: "online",
    agent: "active"
  });
}
