export async function GET() {
  return Response.json({
    app: 884,
    status: "online",
    agent: "active"
  });
}
