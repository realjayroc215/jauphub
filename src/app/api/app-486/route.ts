export async function GET() {
  return Response.json({
    app: 486,
    status: "online",
    agent: "active"
  });
}
