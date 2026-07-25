export async function GET() {
  return Response.json({
    app: 546,
    status: "online",
    agent: "active"
  });
}
