export async function GET() {
  return Response.json({
    app: 616,
    status: "online",
    agent: "active"
  });
}
