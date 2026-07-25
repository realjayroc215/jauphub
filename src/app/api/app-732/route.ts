export async function GET() {
  return Response.json({
    app: 732,
    status: "online",
    agent: "active"
  });
}
