export interface IRandomer {
  initialize(): void;
  getNext(): number;
  hasNext(): boolean;
}

export interface IRandomerConstructor {
  new (length: number): IRandomer;
}
