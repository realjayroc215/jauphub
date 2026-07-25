export async function GET() {
  return Response.json({
    app: 555,
    status: "online",
    agent: "active"
  });
}
