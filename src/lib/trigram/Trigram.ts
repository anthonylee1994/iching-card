import { QuantumRandomer } from '../randomer/QuantumRandomer';
import { Shuffler } from '../shuffler/Shuffler';
import {
  TrigramElement,
  TrigramFullName,
  TrigramNumber,
  TrigramSymbol,
  TrigramType,
} from './type';

export class Trigram {
  constructor(public readonly value: TrigramType) {}

  public static getList(): Trigram[] {
    return [
      new Trigram('乾'),
      new Trigram('坎'),
      new Trigram('艮'),
      new Trigram('震'),
      new Trigram('巽'),
      new Trigram('離'),
      new Trigram('坤'),
      new Trigram('兌'),
    ];
  }

  public static async getShuffledList(): Promise<Trigram[]> {
    return new Shuffler(Trigram.getList(), QuantumRandomer).shuffle();
  }

  public static getMap(): Record<TrigramType, Trigram> {
    const trigramMap = {} as Record<TrigramType, Trigram>;
    Trigram.getList().forEach((trigram) => {
      trigramMap[trigram.toString()] = trigram;
    });
    return trigramMap;
  }

  public static valueOf(value: TrigramType): Trigram {
    return new Trigram(value);
  }

  public static fromCode(value: TrigramNumber): Trigram {
    switch (value) {
      case 1:
        return new Trigram('乾');
      case 2:
        return new Trigram('兌');
      case 3:
        return new Trigram('離');
      case 4:
        return new Trigram('震');
      case 5:
        return new Trigram('巽');
      case 6:
        return new Trigram('坎');
      case 7:
        return new Trigram('艮');
      case 8:
        return new Trigram('坤');
      default:
        return new Trigram('乾');
    }
  }

  public static elementOf(value: TrigramElement): Trigram {
    switch (value) {
      case '天':
        return new Trigram('乾');
      case '水':
        return new Trigram('坎');
      case '山':
        return new Trigram('艮');
      case '雷':
        return new Trigram('震');
      case '風':
        return new Trigram('巽');
      case '火':
        return new Trigram('離');
      case '地':
        return new Trigram('坤');
      case '澤':
        return new Trigram('兌');
      default:
        return new Trigram('乾');
    }
  }

  public toString(): TrigramType {
    return this.value;
  }

  public get fullname(): TrigramFullName {
    return `${this.value}為${this.element}` as TrigramFullName;
  }

  public get element(): TrigramElement {
    switch (this.value) {
      case '乾':
        return '天';
      case '坎':
        return '水';
      case '艮':
        return '山';
      case '震':
        return '雷';
      case '巽':
        return '風';
      case '離':
        return '火';
      case '坤':
        return '地';
      case '兌':
        return '澤';
      default:
        return '天';
    }
  }

  public get code(): TrigramNumber {
    switch (this.value) {
      case '乾':
        return 1;
      case '坎':
        return 6;
      case '艮':
        return 7;
      case '震':
        return 4;
      case '巽':
        return 5;
      case '離':
        return 3;
      case '坤':
        return 8;
      case '兌':
        return 2;
      default:
        return 1;
    }
  }

  public get symbol(): TrigramSymbol {
    switch (this.value) {
      case '乾':
        return '☰';
      case '坎':
        return '☵';
      case '艮':
        return '☶';
      case '震':
        return '☳';
      case '巽':
        return '☴';
      case '離':
        return '☲';
      case '坤':
        return '☷';
      case '兌':
        return '☱';
      default:
        return '☰';
    }
  }
}
