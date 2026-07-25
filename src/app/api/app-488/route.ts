export async function GET() {
  return Response.json({
    app: 488,
    status: "online",
    agent: "active"
  });
}
