export async function GET() {
  return Response.json({
    app: 465,
    status: "online",
    agent: "active"
  });
}
