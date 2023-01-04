export type AddressType = {
  number: number,
  streetTitle: string,
}

export type HouseType = {
  id: number,
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

export const ages: Array<number> = [13, 93, 28, 62, 72, 39, 12, 101, 89]

export const agePredicate = (age: number) => age > 90

const oldAges = [93, 101]


type CourseType = {
  title: string,
  prise: number
}

export const courses: Array<CourseType> = [
  {title: 'CSS', prise: 110},
  {title: 'JS', prise: 140},
  {title: 'React', prise: 220},
]

export const chipPredicate = (course: CourseType) => course.prise < 150

const chipCourses = [
  {title: 'CSS', prise: 110},
  {title: 'JS', prise: 140},
]

export const city: CityType = {
  title: 'Nizhniy Novgorod',
  houses: [
    {id: 1, builtAt: 2012, repaired: false, address: {number: 158, streetTitle: 'Belinskogo'}},
    {id: 2, builtAt: 1888, repaired: false, address: {number: 18, streetTitle: 'Priokskaya'}},
    {id: 3, builtAt: 1902, repaired: true, address: {number: 29, streetTitle: 'Timiryazeva'}},
  ],
  governmentBuildings: [
    {type: 'hospital', budget: 200000, staffCount: 200, address: {number: 19, streetTitle: 'Slavyanskaya'}},
    {type: 'fire-station', budget: 500000, staffCount: 100, address: {number: 50, streetTitle: 'Volzhskaya'}},
  ],
  citizensNumber: 1249861
}

export const demolishHousesByYear = (houses: Array<HouseType>, year: number) => {
  return houses.filter(h => h.builtAt > year)
}

export const getBuildings = (buildings: Array<GovernmentBuildingsType>, building: string) => {
  return buildings.filter(b => b.type !== building)
}
