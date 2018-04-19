export class Car {
  id: number;
  plateNumber: string;
  fuelNorm: number;
  fuelType: number;
  companyId: number;
  carsDeleted: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
