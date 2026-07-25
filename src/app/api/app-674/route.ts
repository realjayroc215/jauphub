export async function GET() {
  return Response.json({
    app: 674,
    status: "online",
    agent: "active"
  });
}
