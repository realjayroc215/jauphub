export class DriveKV {
  constructor(private kv: KVNamespace) {}

  async list() {
    const keys = await this.kv.list();
    return keys.keys.map((key) => key.name);
  }

  async upload(name: string) {
    await this.kv.put(name, 'file');
    return `${name} uploaded`;
  }

  async delete(name: string) {
    await this.kv.delete(name);
    return `${name} deleted`;
  }
}
