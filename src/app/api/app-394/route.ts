export async function GET() {
  return Response.json({
    app: 394,
    status: "online",
    agent: "active"
  });
}
