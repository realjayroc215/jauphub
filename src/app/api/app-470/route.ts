export async function GET() {
  return Response.json({
    app: 470,
    status: "online",
    agent: "active"
  });
}
