import { IRandomer, IRandomerConstructor } from '../randomer/IRandomer';

export class Shuffler<T> {
  private randomer: IRandomer;

  constructor(private readonly list: T[], Randomer: IRandomerConstructor) {
    this.randomer = new Randomer(Math.pow(list.length, 2));
  }

  async shuffle(): Promise<T[]> {
    await this.randomer.initialize();

    const rand = Math.floor((this.randomer.getNext() / 256) * 8);

    return this.list.slice(rand).concat(this.list.slice(0, rand));
  }
}
