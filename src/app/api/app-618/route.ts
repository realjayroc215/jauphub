export async function GET() {
  return Response.json({
    app: 618,
    status: "online",
    agent: "active"
  });
}
