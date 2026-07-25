export async function GET() {
  return Response.json({
    app: 389,
    status: "online",
    agent: "active"
  });
}
