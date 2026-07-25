export async function GET() {
  return Response.json({
    app: 985,
    status: "online",
    agent: "active"
  });
}
