export async function GET() {
  return Response.json({
    app: 773,
    status: "online",
    agent: "active"
  });
}
