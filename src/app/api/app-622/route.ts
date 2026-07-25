export async function GET() {
  return Response.json({
    app: 622,
    status: "online",
    agent: "active"
  });
}
