export async function GET() {
  return Response.json({
    app: 775,
    status: "online",
    agent: "active"
  });
}
