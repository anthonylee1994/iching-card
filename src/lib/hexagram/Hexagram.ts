import { Trigram } from '../trigram/Trigram';
import {
  TrigramElement,
  TrigramFullName,
  TrigramIndex,
  TrigramNumber,
} from '../trigram/type';
import { HexagramMessageMap, HexagramNumber, HexagramType } from './type';
import card1 from '../../assets/iching-cards/1.jpg';
import card2 from '../../assets/iching-cards/2.jpg';
import card3 from '../../assets/iching-cards/3.jpg';
import card4 from '../../assets/iching-cards/4.jpg';
import card5 from '../../assets/iching-cards/5.jpg';
import card6 from '../../assets/iching-cards/6.jpg';
import card7 from '../../assets/iching-cards/7.jpg';
import card8 from '../../assets/iching-cards/8.jpg';
import card9 from '../../assets/iching-cards/9.jpg';
import card10 from '../../assets/iching-cards/10.jpg';
import card11 from '../../assets/iching-cards/11.jpg';
import card12 from '../../assets/iching-cards/12.jpg';
import card13 from '../../assets/iching-cards/13.jpg';
import card14 from '../../assets/iching-cards/14.jpg';
import card15 from '../../assets/iching-cards/15.jpg';
import card16 from '../../assets/iching-cards/16.jpg';
import card17 from '../../assets/iching-cards/17.jpg';
import card18 from '../../assets/iching-cards/18.jpg';
import card19 from '../../assets/iching-cards/19.jpg';
import card20 from '../../assets/iching-cards/20.jpg';
import card21 from '../../assets/iching-cards/21.jpg';
import card22 from '../../assets/iching-cards/22.jpg';
import card23 from '../../assets/iching-cards/23.jpg';
import card24 from '../../assets/iching-cards/24.jpg';
import card25 from '../../assets/iching-cards/25.jpg';
import card26 from '../../assets/iching-cards/26.jpg';
import card27 from '../../assets/iching-cards/27.jpg';
import card28 from '../../assets/iching-cards/28.jpg';
import card29 from '../../assets/iching-cards/29.jpg';
import card30 from '../../assets/iching-cards/30.jpg';
import card31 from '../../assets/iching-cards/31.jpg';
import card32 from '../../assets/iching-cards/32.jpg';
import card33 from '../../assets/iching-cards/33.jpg';
import card34 from '../../assets/iching-cards/34.jpg';
import card35 from '../../assets/iching-cards/35.jpg';
import card36 from '../../assets/iching-cards/36.jpg';
import card37 from '../../assets/iching-cards/37.jpg';
import card38 from '../../assets/iching-cards/38.jpg';
import card39 from '../../assets/iching-cards/39.jpg';
import card40 from '../../assets/iching-cards/40.jpg';
import card41 from '../../assets/iching-cards/41.jpg';
import card42 from '../../assets/iching-cards/42.jpg';
import card43 from '../../assets/iching-cards/43.jpg';
import card44 from '../../assets/iching-cards/44.jpg';
import card45 from '../../assets/iching-cards/45.jpg';
import card46 from '../../assets/iching-cards/46.jpg';
import card47 from '../../assets/iching-cards/47.jpg';
import card48 from '../../assets/iching-cards/48.jpg';
import card49 from '../../assets/iching-cards/49.jpg';
import card50 from '../../assets/iching-cards/50.jpg';
import card51 from '../../assets/iching-cards/51.jpg';
import card52 from '../../assets/iching-cards/52.jpg';
import card53 from '../../assets/iching-cards/53.jpg';
import card54 from '../../assets/iching-cards/54.jpg';
import card55 from '../../assets/iching-cards/55.jpg';
import card56 from '../../assets/iching-cards/56.jpg';
import card57 from '../../assets/iching-cards/57.jpg';
import card58 from '../../assets/iching-cards/58.jpg';
import card59 from '../../assets/iching-cards/59.jpg';
import card60 from '../../assets/iching-cards/60.jpg';
import card61 from '../../assets/iching-cards/61.jpg';
import card62 from '../../assets/iching-cards/62.jpg';
import card63 from '../../assets/iching-cards/63.jpg';
import card64 from '../../assets/iching-cards/64.jpg';
import { hexagramMessagesMap } from './hexagramMessages';

export class Hexagram {
  constructor(public readonly value: HexagramType) {}

  public static dictionary: HexagramType[][] = [
    ['乾', '夬', '大有', '大壯', '小畜', '需', '大畜', '泰'],
    ['履', '兌', '睽', '歸妹', '中孚', '節', '損', '臨'],
    ['同人', '革', '離', '豐', '家人', '既濟', '賁', '明夷'],
    ['無妄', '隨', '噬嗑', '震', '益', '屯', '頤', '復'],
    ['姤', '大過', '鼎', '恆', '巽', '井', '蠱', '升'],
    ['訟', '困', '未濟', '解', '渙', '坎', '蒙', '師'],
    ['遯', '咸', '旅', '小過', '漸', '蹇', '艮', '謙'],
    ['否', '萃', '晉', '豫', '觀', '比', '剝', '坤'],
  ];

  public static images: string[][] = [
    [card1, card43, card14, card34, card9, card5, card26, card11],
    [card10, card58, card38, card54, card61, card60, card41, card19],
    [card13, card49, card30, card55, card37, card63, card22, card36],
    [card25, card17, card21, card51, card42, card3, card27, card24],
    [card44, card28, card50, card32, card57, card48, card18, card46],
    [card6, card47, card64, card40, card59, card29, card4, card7],
    [card33, card31, card56, card62, card53, card39, card52, card15],
    [card12, card45, card35, card16, card20, card8, card23, card2],
  ];

  public static codes: HexagramNumber[][] = [
    [1, 43, 14, 34, 9, 5, 26, 11],
    [10, 58, 38, 54, 61, 60, 41, 19],
    [13, 49, 30, 55, 37, 63, 22, 36],
    [25, 17, 21, 51, 42, 3, 27, 24],
    [44, 28, 50, 32, 57, 48, 18, 46],
    [6, 47, 64, 40, 59, 29, 4, 7],
    [33, 31, 56, 62, 53, 39, 52, 15],
    [12, 45, 35, 16, 20, 8, 23, 2],
  ];

  public get message(): HexagramMessageMap | null {
    return hexagramMessagesMap[this.value];
  }

  public get rowIndex(): TrigramIndex {
    return Hexagram.dictionary.findIndex((types) =>
      types.includes(this.value),
    ) as TrigramIndex;
  }

  public get columnIndex(): TrigramIndex {
    return Hexagram.dictionary[this.rowIndex].findIndex(
      (type) => type === this.value,
    ) as TrigramIndex;
  }

  public get firstTrigram(): Trigram {
    return Trigram.fromCode((this.columnIndex + 1) as TrigramNumber);
  }

  public get lastTrigram(): Trigram {
    return Trigram.fromCode((this.rowIndex + 1) as TrigramNumber);
  }

  public get fullname():
    | `${TrigramElement}${TrigramElement}${HexagramType}`
    | TrigramFullName {
    if (this.firstTrigram.element === this.lastTrigram.element) {
      return this.firstTrigram.fullname;
    }

    return `${this.firstTrigram.element}${this.lastTrigram.element}${this.value}`;
  }

  public get code(): HexagramNumber {
    return Hexagram.codes[this.rowIndex][this.columnIndex] as HexagramNumber;
  }

  public get cardImage(): string {
    return Hexagram.images[this.rowIndex][this.columnIndex];
  }

  public toString(): HexagramType {
    return this.value;
  }

  public static elementOf(first: TrigramElement, last: TrigramElement) {
    return Hexagram.valueOf(Trigram.elementOf(first), Trigram.elementOf(last));
  }

  public static fromValue(value: HexagramType): Hexagram {
    return new Hexagram(value);
  }

  public static fromCode(code: HexagramNumber): Hexagram {
    const rowIndex = Hexagram.codes.findIndex((codes) =>
      codes.includes(code),
    ) as TrigramIndex;

    const colIndex = Hexagram.codes[rowIndex].findIndex(
      (c) => c === code,
    ) as TrigramIndex;

    return new Hexagram(Hexagram.dictionary[rowIndex][colIndex]);
  }

  public static valueOf(first: Trigram, last: Trigram) {
    const firstIndex = first.code - 1;
    const lastIndex = last.code - 1;
    return new Hexagram(Hexagram.dictionary[lastIndex][firstIndex]);
  }
}
