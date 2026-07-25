export async function GET() {
  return Response.json({
    app: 504,
    status: "online",
    agent: "active"
  });
}
