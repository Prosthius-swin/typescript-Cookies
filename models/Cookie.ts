export enum Colours {
  Brown,
  White,
  Black,
  Pink,
  Blue,
}

export class Cookie {
  //TODO - Cookies have three attributes; name, colour, chocolateChipNum
  // colour is a string
  // There is one constructor which takes a name as a parameter.  Initialise colour to brown and chocolateChipNum to 0
  name: string;
  colour: Colours;
  chocolateChipNum: number;

  constructor(_name: string) {
    this.name = _name;
    this.colour = Colours.Brown;
    this.chocolateChipNum = 0;
  }
}

export class SprinkleCookie {
  name: string;
  colour: Colours;
  chocolateChipNum: number;
  sprinkleColour: string;

  constructor(_name: string) {
    this.name = _name;
    this.colour = Colours.Brown;
    this.chocolateChipNum = 0;
  }
}
