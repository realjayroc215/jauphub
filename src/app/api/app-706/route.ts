export async function GET() {
  return Response.json({
    app: 706,
    status: "online",
    agent: "active"
  });
}
