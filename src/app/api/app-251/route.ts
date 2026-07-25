export async function GET() {
  return Response.json({
    app: 251,
    status: "online",
    agent: "active"
  });
}
