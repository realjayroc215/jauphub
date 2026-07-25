export async function GET() {
  return Response.json({
    app: 349,
    status: "online",
    agent: "active"
  });
}
