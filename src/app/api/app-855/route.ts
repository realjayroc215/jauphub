export async function GET() {
  return Response.json({
    app: 855,
    status: "online",
    agent: "active"
  });
}
