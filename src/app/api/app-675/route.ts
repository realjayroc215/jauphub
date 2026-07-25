export async function GET() {
  return Response.json({
    app: 675,
    status: "online",
    agent: "active"
  });
}
