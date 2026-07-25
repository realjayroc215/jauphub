export async function GET() {
  return Response.json({
    app: 907,
    status: "online",
    agent: "active"
  });
}
