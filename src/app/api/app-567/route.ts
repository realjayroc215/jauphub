export async function GET() {
  return Response.json({
    app: 567,
    status: "online",
    agent: "active"
  });
}
