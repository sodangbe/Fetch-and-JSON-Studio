class Panthera {
   roar: string;
   constructor(currentRoar: string) {
      this.roar = currentRoar;
   }
}

class Tiger extends Panthera {
   stripes: boolean = true;

}

let tigger = new Tiger("loud");
console.log(tigger.roar);
console.log(tigger.stripes);
