export async function GET() {
  return Response.json({
    app: 275,
    status: "online",
    agent: "active"
  });
}
