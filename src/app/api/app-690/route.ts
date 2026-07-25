export async function GET() {
  return Response.json({
    app: 690,
    status: "online",
    agent: "active"
  });
}
