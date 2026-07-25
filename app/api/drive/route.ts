import { DriveKV } from '../../../core/drive-kv';
import { JAUPLog } from '../../../core/log';

function getDriveBinding() {
  const binding = (globalThis as any).JAUP_DRIVE;

  if (binding) {
    return binding;
  }

  return {
    list: async () => ({ keys: [] }),
    put: async () => undefined,
    delete: async () => undefined,
  };
}

export async function GET() {
  const drive = new DriveKV(getDriveBinding() as any);
  const files = await drive.list();
  return Response.json({ files });
}

export async function POST(req: Request) {
  const { name } = await req.json();
  const drive = new DriveKV(getDriveBinding() as any);
  const result = await drive.upload(name);
  JAUPLog.write('drive', `Uploaded ${name}`);
  return Response.json({ result });
}

export async function DELETE(req: Request) {
  const { name } = await req.json();
  const drive = new DriveKV(getDriveBinding() as any);
  const result = await drive.delete(name);
  JAUPLog.write('drive', `Deleted ${name}`);
  return Response.json({ result });
}
