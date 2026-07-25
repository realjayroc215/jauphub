export class DriveMock {
  files = ['readme.txt', 'config.json', 'jaup-core.log'];

  list() {
    return this.files;
  }

  upload(name: string) {
    this.files.push(name);
    return `${name} uploaded`;
  }

  delete(name: string) {
    this.files = this.files.filter((file) => file !== name);
    return `${name} deleted`;
  }
}
