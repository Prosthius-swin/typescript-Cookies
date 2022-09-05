import { Colours } from './Colours';

export class SprinkleCookie {
  name: string;
  colour: Colours;
  chocolateChipNum: number;
  sprinkleColour: string;

  constructor(_name: string) {
    this.name = _name;
    this.colour = Colours.Black;
    this.chocolateChipNum = 0;
    this.sprinkleColour = Colours.Pink;
  }
}
