export async function GET() {
  return Response.json({
    app: 799,
    status: "online",
    agent: "active"
  });
}
