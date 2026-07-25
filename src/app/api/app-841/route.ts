export async function GET() {
  return Response.json({
    app: 841,
    status: "online",
    agent: "active"
  });
}
