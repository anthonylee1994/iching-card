import { IRandomer } from './IRandomer';

export class QuantumRandomer implements IRandomer {
  private currentIndex = 0;
  private values: number[] = [];
  private static API_URL = 'https://qrng.anu.edu.au/API/jsonI.php';

  constructor(private readonly length: number) {}

  async initialize(): Promise<void> {
    const response = await fetch(
      `${QuantumRandomer.API_URL}?length=${this.length}&type=uint8`,
    );
    const data = await response.json();
    this.values = data.data as number[];
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
