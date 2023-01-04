export type AddressType = {
  number: number,
  streetTitle: string,
}

export type HouseType = {
  builtAt: number,
  repaired: boolean,
  address: AddressType,
}

export type GovernmentBuildingsType = {
  type: 'hospital' | 'fire-station',
  budget: number,
  staffCount: number,
  address: AddressType,
}

export type CityType = {
  title: string,
  houses: Array<HouseType>,
  governmentBuildings: Array<GovernmentBuildingsType>,
  citizensNumber: number,
}