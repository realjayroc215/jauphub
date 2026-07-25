export async function GET() {
  return Response.json({
    app: 751,
    status: "online",
    agent: "active"
  });
}
