export async function GET() {
  return Response.json({
    app: 249,
    status: "online",
    agent: "active"
  });
}
