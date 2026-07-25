export async function GET() {
  return Response.json({
    app: 909,
    status: "online",
    agent: "active"
  });
}
