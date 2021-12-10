import { IRandomer, IRandomerConstructor } from '../randomer/IRandomer';

export class Shuffler<T> {
  private randomer: IRandomer;

  constructor(private readonly list: T[], Randomer: IRandomerConstructor) {
    this.randomer = new Randomer(Math.pow(list.length, 2));
  }

  async shuffle(): Promise<T[]> {
    await this.randomer.initialize();

    return this.list.sort(() => {
      const rand = this.randomer.getNext();
      return rand > 127 ? 1 : -1;
    });
  }
}
