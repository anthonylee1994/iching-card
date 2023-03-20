import { IRandomer } from './IRandomer';

export class StandardRandomer implements IRandomer {
  private currentIndex = 0;
  private values: number[] = [];

  constructor(private readonly length: number) {}

  async initialize(): Promise<void> {
    this.values = Array.from({ length: this.length }, (_, i) => Math.random() * 256);
    this.currentIndex = 0;
  }

  getNext(): number {
    if (!this.hasNext()) {
      throw new Error('No more values');
    }

    return this.values[this.currentIndex++];
  }

  hasNext(): boolean {
    return this.currentIndex < this.values.length;
  }
}
