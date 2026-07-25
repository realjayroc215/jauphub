export async function GET() {
  return Response.json({
    app: 836,
    status: "online",
    agent: "active"
  });
}
