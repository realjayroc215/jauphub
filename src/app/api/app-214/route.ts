export async function GET() {
  return Response.json({
    app: 214,
    status: "online",
    agent: "active"
  });
}
