export async function GET() {
  return Response.json({
    app: 765,
    status: "online",
    agent: "active"
  });
}
