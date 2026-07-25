export async function GET() {
  return Response.json({
    app: 901,
    status: "online",
    agent: "active"
  });
}
