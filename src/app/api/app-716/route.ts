export async function GET() {
  return Response.json({
    app: 716,
    status: "online",
    agent: "active"
  });
}
