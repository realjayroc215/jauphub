export async function GET() {
  return Response.json({
    app: 939,
    status: "online",
    agent: "active"
  });
}
