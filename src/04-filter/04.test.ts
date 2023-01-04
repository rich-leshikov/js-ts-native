import {agePredicate, ages, chipPredicate, city, courses, demolishHousesByYear, getBuildings} from './04'

test("Should take oldmen older 90", () => {
  const oldMen = ages.filter(agePredicate)

  expect(oldMen[0]).toBe(93)
  expect(oldMen[1]).toBe(101)
  expect(oldMen.length).toBe(2)
})

test("Should take courses chipper 150", () => {
  const chipCourses = courses.filter(chipPredicate)

  expect(chipCourses[0].title).toBe('CSS')
  expect(chipCourses[0].prise).toBe(110)
  expect(chipCourses[1].title).toBe('JS')
  expect(chipCourses[1].prise).toBe(140)
  expect(chipCourses.length).toBe(2)
})

test("Should get only completed tasks", () => {
  const tasks = [
    {title: 'Bread', isDone: true},
    {title: 'Milk', isDone: false},
    {title: 'Eggs', isDone: true},
    {title: 'Potatoes', isDone: true},
  ]

  const completedTasks = tasks.filter(t => t.isDone)

  expect(completedTasks.length).toBe(3)
  expect(completedTasks[2].title).toBe('Potatoes')
})

test("Should get only uncompleted tasks", () => {
  const tasks = [
    {title: 'Bread', isDone: true},
    {title: 'Milk', isDone: false},
    {title: 'Eggs', isDone: true},
    {title: 'Potatoes', isDone: true},
    {title: 'Ketchup', isDone: false},
  ]

  const uncompletedTasks = tasks.filter(t => !t.isDone)

  expect(uncompletedTasks.length).toBe(2)
  expect(uncompletedTasks[1].title).toBe('Ketchup')
})

test("Houses should be destroyed", () => {
  const demolishingHouses = demolishHousesByYear(city.houses, 1960)

  expect(demolishingHouses.length).toBe(1)
  expect(demolishingHouses[0].id).toBe(1)
})

test("Get buildings which aren't hospital", () => {
  expect(getBuildings(city.governmentBuildings, 'hospital')[0].type).toBe('fire-station')
})
