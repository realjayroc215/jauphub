export async function GET() {
  return Response.json({
    app: 633,
    status: "online",
    agent: "active"
  });
}
