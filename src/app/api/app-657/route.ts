export async function GET() {
  return Response.json({
    app: 657,
    status: "online",
    agent: "active"
  });
}
