export async function GET() {
  return Response.json({
    app: 830,
    status: "online",
    agent: "active"
  });
}
