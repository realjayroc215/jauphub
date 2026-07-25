export async function GET() {
  return Response.json({
    app: 511,
    status: "online",
    agent: "active"
  });
}
