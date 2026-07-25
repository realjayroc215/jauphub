export async function GET() {
  return Response.json({
    app: 615,
    status: "online",
    agent: "active"
  });
}
