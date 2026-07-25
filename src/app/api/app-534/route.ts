export async function GET() {
  return Response.json({
    app: 534,
    status: "online",
    agent: "active"
  });
}
