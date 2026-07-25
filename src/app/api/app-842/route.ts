export async function GET() {
  return Response.json({
    app: 842,
    status: "online",
    agent: "active"
  });
}
