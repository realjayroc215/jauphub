export async function GET() {
  return Response.json({
    app: 181,
    status: "online",
    agent: "active"
  });
}
