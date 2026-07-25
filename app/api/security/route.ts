import { SecurityFeed } from '../../../core/security';
import { JAUPLog } from '../../../core/log';

const feed = new SecurityFeed();

export async function GET() {
  return Response.json({
    events: feed.getEvents(),
  });
}

export async function POST(req: Request) {
  const { event } = await req.json();
  feed.log(event);
  JAUPLog.write('security', event);
  return Response.json({ logged: event });
}
