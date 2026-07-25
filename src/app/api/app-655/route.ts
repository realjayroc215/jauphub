export async function GET() {
  return Response.json({
    app: 655,
    status: "online",
    agent: "active"
  });
}
