export async function GET() {
  return Response.json({
    app: 425,
    status: "online",
    agent: "active"
  });
}
