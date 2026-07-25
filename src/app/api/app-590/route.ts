export async function GET() {
  return Response.json({
    app: 590,
    status: "online",
    agent: "active"
  });
}
