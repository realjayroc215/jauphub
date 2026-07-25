export async function GET() {
  return Response.json({
    app: 940,
    status: "online",
    agent: "active"
  });
}
