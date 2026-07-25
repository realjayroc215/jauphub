export async function GET() {
  return Response.json({
    app: 823,
    status: "online",
    agent: "active"
  });
}
