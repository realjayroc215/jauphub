export async function GET() {
  return Response.json({
    app: 935,
    status: "online",
    agent: "active"
  });
}
