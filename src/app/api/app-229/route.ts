export async function GET() {
  return Response.json({
    app: 229,
    status: "online",
    agent: "active"
  });
}
