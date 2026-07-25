export async function GET() {
  return Response.json({
    app: 515,
    status: "online",
    agent: "active"
  });
}
