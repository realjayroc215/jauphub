export async function GET() {
  return Response.json({
    app: 435,
    status: "online",
    agent: "active"
  });
}
