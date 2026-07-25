export async function GET() {
  return Response.json({
    app: 701,
    status: "online",
    agent: "active"
  });
}
