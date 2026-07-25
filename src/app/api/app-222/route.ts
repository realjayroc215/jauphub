export async function GET() {
  return Response.json({
    app: 222,
    status: "online",
    agent: "active"
  });
}
