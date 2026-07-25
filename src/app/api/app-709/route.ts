export async function GET() {
  return Response.json({
    app: 709,
    status: "online",
    agent: "active"
  });
}
