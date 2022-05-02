export class Any {
  static randomString(): string {
    const radix = 36;

    return (Math.random() + 1).toString(radix).substring(2, 5);
  }

  static randomInteger(min = 1, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
