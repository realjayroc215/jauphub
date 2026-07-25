export async function GET() {
  return Response.json({
    app: 562,
    status: "online",
    agent: "active"
  });
}
