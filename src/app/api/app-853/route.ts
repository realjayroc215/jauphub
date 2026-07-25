export async function GET() {
  return Response.json({
    app: 853,
    status: "online",
    agent: "active"
  });
}
