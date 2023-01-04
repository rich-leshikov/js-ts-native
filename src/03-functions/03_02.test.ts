import {CityType} from '../02-objects/02';
import {changeBudget, createMessage, fireStuff, hireStuff, repairHouse} from './03';

let city: CityType

beforeEach(() => {
  city = {
    title: 'Nizhniy Novgorod',
    houses: [
      {builtAt: 2012, repaired: false, address: {number: 158, streetTitle: 'Belinskogo'}},
      {builtAt: 2008, repaired: false, address: {number: 18, streetTitle: 'Priokskaya'}},
      {builtAt: 2002, repaired: false, address: {number: 29, streetTitle: 'Timiryazeva'}},
    ],
    governmentBuildings: [
      {type: 'hospital', budget: 200000, staffCount: 200, address: {number: 19, streetTitle: 'Slavyanskaya'}},
      {type: 'fire-station', budget: 500000, staffCount: 100, address: {number: 50, streetTitle: 'Volzhskaya'}},
    ],
    citizensNumber: 1249861
  }
})

test("Budget should be changed for hospital", () => {
  changeBudget(city.governmentBuildings[0], 100000)

  expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for fire station", () => {
  changeBudget(city.governmentBuildings[1], -100000)

  expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repaired", () => {
  repairHouse(city.houses[0])

  expect(city.houses[0].repaired).toBeTruthy()
})

test("Stuff should be increased", () => {
  hireStuff(city.governmentBuildings[0], 20)

  expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test("Stuff should be fired", () => {
  fireStuff(city.governmentBuildings[0], 20)

  expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("Greeting to citizens should be correct", () => {
  expect(createMessage(city)).toBe(`Hello Nizhniy Novgorod citizens. I want you are happy. All 1249861 of you.`)
})