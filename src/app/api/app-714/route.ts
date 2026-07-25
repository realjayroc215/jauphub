export async function GET() {
  return Response.json({
    app: 714,
    status: "online",
    agent: "active"
  });
}
