export async function GET() {
  return Response.json({
    app: 682,
    status: "online",
    agent: "active"
  });
}
