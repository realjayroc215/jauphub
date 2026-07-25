export async function GET() {
  return Response.json({
    app: 495,
    status: "online",
    agent: "active"
  });
}
