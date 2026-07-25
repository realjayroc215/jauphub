export async function GET() {
  return Response.json({
    app: 670,
    status: "online",
    agent: "active"
  });
}
