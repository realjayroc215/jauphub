export async function GET() {
  return Response.json({
    app: 685,
    status: "online",
    agent: "active"
  });
}
