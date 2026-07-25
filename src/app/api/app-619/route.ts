export async function GET() {
  return Response.json({
    app: 619,
    status: "online",
    agent: "active"
  });
}
