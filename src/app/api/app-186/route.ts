export async function GET() {
  return Response.json({
    app: 186,
    status: "online",
    agent: "active"
  });
}
