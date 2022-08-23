export class SprinkleCookie {
  name: string;
  colour: string;
  chocolateChipNum: number;
  sprinkleColour: string;

  constructor(_name: string) {
    this.name = _name;
    this.colour = 'brown';
    this.chocolateChipNum = 0;
    enum Colours {
      Brown,
      White,
      Black,
      Pink,
      Blue,
    }
  }
}
