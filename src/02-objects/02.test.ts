import {CityType} from './02';

let city: CityType

beforeEach(() => {
  city = {
    title: 'Nizhniy Novgorod',
    houses: [
      {builtAt: 2012, repaired: false, address: {number: 158, streetTitle: 'Belinskogo'}},
      {builtAt: 2008, repaired: false, address: {number: 18, streetTitle: 'Priokskaya'}},
      {builtAt: 2002, repaired: true, address: {number: 29, streetTitle: 'Timiryazeva'}},
    ],
    governmentBuildings: [
      {type: 'hospital', budget: 200000, staffCount: 200, address: {number: 19, streetTitle: 'Slavyanskaya'}},
      {type: 'fire-station', budget: 500000, staffCount: 100, address: {number: 50, streetTitle: 'Volzhskaya'}},
    ],
    citizensNumber: 1249861
  }
})

test("Testing houses of city object should be correct", () => {
  expect(city.houses[0].builtAt).toBe(2012)
  expect(city.houses[0].repaired).toBe(false)
  expect(city.houses[0].address.number).toBe(158)
  expect(city.houses[0].address.streetTitle).toBe('Belinskogo')

  expect(city.houses[1].builtAt).toBe(2008)
  expect(city.houses[1].repaired).toBe(false)
  expect(city.houses[1].address.number).toBe(18)
  expect(city.houses[1].address.streetTitle).toBe('Priokskaya')

  expect(city.houses[2].builtAt).toBe(2002)
  expect(city.houses[2].repaired).toBe(true)
  expect(city.houses[2].address.number).toBe(29)
  expect(city.houses[2].address.streetTitle).toBe('Timiryazeva')
})

test("Test city object should contain hospital and fire station", () => {
  expect(city.governmentBuildings[0].type).toBe('hospital')
  expect(city.governmentBuildings[0].budget).toBe(200000)
  expect(city.governmentBuildings[0].staffCount).toBe(200)
  expect(city.governmentBuildings[0].address.number).toBe(19)
  expect(city.governmentBuildings[0].address.streetTitle).toBe('Slavyanskaya')

  expect(city.governmentBuildings[1].type).toBe('fire-station')
  expect(city.governmentBuildings[1].budget).toBe(500000)
  expect(city.governmentBuildings[1].staffCount).toBe(100)
  expect(city.governmentBuildings[1].address.number).toBe(50)
  expect(city.governmentBuildings[1].address.streetTitle).toBe('Volzhskaya')
})