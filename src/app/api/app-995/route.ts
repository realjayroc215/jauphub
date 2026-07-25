export async function GET() {
  return Response.json({
    app: 995,
    status: "online",
    agent: "active"
  });
}
