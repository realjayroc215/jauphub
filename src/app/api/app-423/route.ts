export async function GET() {
  return Response.json({
    app: 423,
    status: "online",
    agent: "active"
  });
}
