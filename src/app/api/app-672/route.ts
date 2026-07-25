export async function GET() {
  return Response.json({
    app: 672,
    status: "online",
    agent: "active"
  });
}
