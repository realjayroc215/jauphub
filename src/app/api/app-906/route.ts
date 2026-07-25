export async function GET() {
  return Response.json({
    app: 906,
    status: "online",
    agent: "active"
  });
}
