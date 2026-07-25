export async function GET() {
  return Response.json({
    app: 978,
    status: "online",
    agent: "active"
  });
}
