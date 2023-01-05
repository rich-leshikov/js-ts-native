import {CityType} from '../02-objects/02';

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

test('List of street titles of government buildings', () => {
  const streetTitles = city.governmentBuildings.map(gb => gb.address.streetTitle)

  expect(streetTitles.length).toBe(2)
  expect(streetTitles[0]).toBe('Slavyanskaya')
  expect(streetTitles[1]).toBe('Volzhskaya')
})

test('List of street titles', () => {
  const streetTitles = city.houses.map(h => h.address.streetTitle)

  expect(streetTitles.length).toBe(3)
  expect(streetTitles[0]).toBe('Belinskogo')
  expect(streetTitles[1]).toBe('Priokskaya')
  expect(streetTitles[2]).toBe('Timiryazeva')
})