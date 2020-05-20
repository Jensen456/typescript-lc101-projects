import { Payload } from "./Payload";

class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems = [];
  astronauts = [];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number;
    let total = (3107.39 + 1000.39 + 753 + 541 + 2107.39)

  currentMassKg(): number;
    this.sumMass = this.astronauts + this.cargoItems

  canAdd(item: Payload): boolean;
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        return true;

  addCargo(cargo: Cargo): boolean;
    this.canAdd();
    if (true;
        cargo + this.cargoItems
        return true;
    ) else (
        return false;
    );

  addAstronaut(astronaut: Astronaut): boolean;
    this.canAdd();
    if (true;
        astronaut + this.astronauts
        return true;
    ) else (
        return false;
    );
}

export class Rocket {}
