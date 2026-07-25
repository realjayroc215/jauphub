export async function GET() {
  return Response.json({
    app: 981,
    status: "online",
    agent: "active"
  });
}
