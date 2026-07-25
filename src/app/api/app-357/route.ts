export async function GET() {
  return Response.json({
    app: 357,
    status: "online",
    agent: "active"
  });
}
