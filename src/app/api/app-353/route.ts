export async function GET() {
  return Response.json({
    app: 353,
    status: "online",
    agent: "active"
  });
}
