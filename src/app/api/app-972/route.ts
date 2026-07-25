export async function GET() {
  return Response.json({
    app: 972,
    status: "online",
    agent: "active"
  });
}
