export async function GET() {
  return Response.json({
    app: 524,
    status: "online",
    agent: "active"
  });
}
