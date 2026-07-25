export async function GET() {
  return Response.json({
    app: 577,
    status: "online",
    agent: "active"
  });
}
