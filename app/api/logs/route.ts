import { JAUPLog } from '../../../core/log';

export async function GET() {
  return Response.json({ logs: JAUPLog.recent() });
}
