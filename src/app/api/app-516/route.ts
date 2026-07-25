export async function GET() {
  return Response.json({
    app: 516,
    status: "online",
    agent: "active"
  });
}
