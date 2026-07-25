export async function GET() {
  return Response.json({
    app: 259,
    status: "online",
    agent: "active"
  });
}
