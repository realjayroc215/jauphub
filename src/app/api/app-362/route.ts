export async function GET() {
  return Response.json({
    app: 362,
    status: "online",
    agent: "active"
  });
}
