export async function GET() {
  return Response.json({
    app: 771,
    status: "online",
    agent: "active"
  });
}
