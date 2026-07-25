export async function GET() {
  return Response.json({
    app: 632,
    status: "online",
    agent: "active"
  });
}
