export async function GET() {
  return Response.json({
    app: 761,
    status: "online",
    agent: "active"
  });
}
