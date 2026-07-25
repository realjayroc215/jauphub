export async function GET() {
  return Response.json({
    app: 902,
    status: "online",
    agent: "active"
  });
}
