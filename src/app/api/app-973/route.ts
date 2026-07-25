export async function GET() {
  return Response.json({
    app: 973,
    status: "online",
    agent: "active"
  });
}
