export async function GET() {
  return Response.json({
    app: 231,
    status: "online",
    agent: "active"
  });
}
