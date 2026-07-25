export async function GET() {
  return Response.json({
    app: 43,
    status: "online",
    agent: "active"
  });
}
